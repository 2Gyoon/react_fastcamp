import LoginButton from "../components/LoginButton";

export default function Login(props){
  // console.log(props);
  // function login(){
  //   setTimeout(() => {
  //     // 페이지 이동시키는 로직
  //     props.history.push('/');
  //   }, 1000);
  // }

  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      <LoginButton />
    </div>
  );
}