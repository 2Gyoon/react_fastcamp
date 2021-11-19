import { useParams } from "react-router";

export default function Profile() {
  const params = useParams();
  const id = params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {id && <p>id는 {id}입니다.</p>}
    </div>
  )
}