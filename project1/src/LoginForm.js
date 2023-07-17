import {useState} from 'react';
const LoginForm = () => {

    const [userInfo , setUserInfo] = useState({
        userId : '',
        userPw : ''
    });



    let userIdEl;


    const handleChange = (e) => {
     
        setUserInfo({...userInfo, [e.currentTarget.name] : e.currentTarget.value });
    };

    const handleClick = () => {

        alert(`${userInfo.userId} / ${userInfo.userPw}`);
        setUserInfo({
            userId : '',
            userPw : ''
        });

        userIdEl.focus();
    };




    return (
        <div>
            아이디 : <input type="text" name="userId" value={userInfo.userId} 
                        onChange={handleChange} ref={(ref)=> userIdEl = ref}/><br/>
            비밀번호 : <input type="password" name="userPw" value={userInfo.userPw} 
                        onChange={handleChange}/><br/>
            <button type="submit" onClick={handleClick}>로그인</button>
        </div>
    )

};

export default LoginForm;