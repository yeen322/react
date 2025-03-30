import PropTypes from "prop-types";

function MyHello(props) {
    return (
        <div>hi, {props.myName}</div>
    );
}

MyHello.propTypes = {
    myName: PropTypes.string.isRequired
};

export default MyHello;