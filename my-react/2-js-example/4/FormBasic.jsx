import {useForm} from 'react-hook-form';

export default function FormBasic() {
    // 기본값 준비
    const defaultValues = {
        name: '홍길동',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    // 폼 초기화
    const { register, handleSubmit,
    formState: {errors} } = useForm({
        defaultValues
    });

    // 제출 시 처리
    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <Form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            {/* 검증 규칙 등을 폼에 연결 */}
            <div>
                <label htmlFor="name">이름:</label><br/>
                <input id="name" type="text"
                    {...register('name', {
                        required: '이름은 필수 입력 항목입니다.',
                        maxLength: {
                            value: 20,
                            message: '이름은 20자 이내로 작성해주세요.'
                        }
                    })}
                />
                <div>{errors.name?.message}</div>
                <div>
                    <label htmlFor="gender">성별:</label><br/>
                    <label>
                        <input type="radio" value="male"
                            {...register('gender', {
                                required: '성별은 필수',
                            })} />남성
                    </label>
                    <label>
                        <input type="radio" value="female"
                               {...register('gender', {
                                   required: '성별은 필수',
                               })} />여성
                    </label>
                    <div>{errors.gender?.message}</div>
                </div>
                <div>
                    <label htmlFor="emal" type="email"
                           {...register('emal', {
                               required: '이메일 주소는 필수 입력사항',
                               pattern: {
                                   value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                                   message: '이메일 주소 형식이 잘못됨'
                               }
                           })} />
                    <div>{errors.email?.message}</div>
                </div>
                <div>
                    <label htmlFor="memo">메모:</label><br/>
                    <textarea id="memo"
                              {...register('memo', {
                                  required: '비고는 필수 입력 항목',
                                  minLength: {
                                      value: 10,
                                      message: '메모는 10자 이상으로 작성'
                                  }
                              })} />
                    <div>{errors.memo?.message}</div>
                </div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </Form>
    );
}
