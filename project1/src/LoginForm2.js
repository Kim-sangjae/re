import {useState,useRef} from 'react';
const LoginForm = () => {

    const [userInfo , setUserInfo] = useState({
        userId : '',
        userPw : ''
    });



    let userIdEl = useRef(null);
    let loginCnt = useRef(0);



    const handleChange = (e) => {
     
        setUserInfo({...userInfo, [e.currentTarget.name] : e.currentTarget.value });
    };

    const handleClick = () => {

        alert(`${userInfo.userId} / ${userInfo.userPw}`);
        setUserInfo({
            userId : '',
            userPw : ''
        });

        // userIdEl.focus();
        userIdEl.current.focus();
        loginCnt.current++;
        console.log("로그인 카운트 :" , loginCnt.current);
    };




    return (
        <div>
            아이디 : <input type="text" name="userId" value={userInfo.userId} 
                        onChange={handleChange} ref={userIdEl}/><br/>
            비밀번호 : <input type="password" name="userPw" value={userInfo.userPw} 
                        onChange={handleChange}/><br/>
            <button type="submit" onClick={handleClick}>로그인</button>
        </div>
    )

};


LoginForm.method = function (){
    console.log("LoginForm 컴포넌트에서 호출한 메서드!")
};


export default LoginForm;