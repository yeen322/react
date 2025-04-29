import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

// ng 규칙 추가
yup.addMethod(yup.string, 'ng', function () {
    return this.test('ng',
        ({label}) => `${label}에 적절하지 않은 단어가 포함되어 있습니다.`,
        value => {
            const ngs = ['폭력', '죽음', '그로테스크'];
            for (const ng of ngs) {
                if (value.includes(ng)) {
                    return false;
                }
            }
            return true;
        })
})
// 검증 규칙 준비
const schema = yup.object({
    name: yup
        .string()
        .label('이름')
        .trim().lowercase()
        .required('${label}은 필수 입력.')
        .max(20, '${label}은 ${max} 이내로 입력.'),
    gender: yup
        .string()
        .label('성별')
        .required('${label}은 필수 입력.'),
    email: yup
        .string()
        .label('이메일 주소')
        .required('${label}는 필수 입력.')
        .email('${label}의 형식이 잘못됨.'),
    memo: yup
        .string()
        .label('비고')
        .required('${label}는 필수 입력.')
        .min(10, '${label}은 ${min}자 이상으로 입력.')
        // .test('ng',
        //     ({label}) => `${label}에 적절하지 않은 단어가 포함됨.`,
        //     value => {
        //         // 부적절한 단어
        //         const ngs = ['폭력', '죽음', '그로테스크'];
        //         // 입력 문자열에 부적절한 단어가 포함되었는지 판단
        //         for (const ng of ngs) {
        //             if (value.includes(ng)) {
        //                 return false;
        //             }
        //         }
        //         return true;
        //     })
        .ng()
});

export default function FormYup() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '홍길동',
            email: 'admin@example.com',
            gender: 'male',
            memo: ''
        },

        // Yup에게 검증 맡김
        resolver: yupResolver(schema),
    });

    // 제출 시 처리 준비
    const onsubmit = (data) => console.log(data);
    const onerror = (err) => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">이름:</label><br/>
                <input id="name" type="text"
                       {...register('name')}/>
                <div>{errors.name?.message}</div>
            </div>

            <div>
                <label htmlFor="gender">성별:</label><br/>
                <label>
                    <input type="radio" value="male"
                           {...register('gender')}/>남성
                </label>
                <label>
                    <input type="radio" value="female"
                           {...register('gender')}/>여성
                </label>
                <div>{errors.gender?.message}</div>
            </div>

            <div>
                <label htmlFor="eamil">이메일 주소:</label><br/>
                <input id="email" type="email"
                       {...register('email')}/>
                <div>{errors.email?.message}</div>
            </div>

            <div>
                <label htmlFor="memo">비고:</label><br/>
                <textarea id="memo"
                          {...register('memo')}/>
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </form>
    )
}