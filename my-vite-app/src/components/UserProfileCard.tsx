// 1. Import useState
import { useState } from "react";

// 2. กำหนด Type ของ Props
type UserProfileCardProps = {
  name: string;
  jobTitle: string;
};

// 3. รับ props เป็น parameter ของฟังก์ชัน
function UserProfileCard(props: UserProfileCardProps) {
  // หรือใช้ Destructuring: function UserProfileCard({ name, jobTitle }: UserProfileCardProps) {

  // 4. ใช้ useState เพื่อสร้าง state
  // const [state, setState] = useState(initialValue)
  const [isFollowing, setIsFollowing] = useState(false);

  function toggleFollow() {
    // 5. ใช้ setState function เพื่ออัปเดต state
    setIsFollowing(!isFollowing);
  }

  return (
    <div className="card">
      {" "}
      {/* อย่าลืม! class -> className */}
      <h2>{props.name}</h2> {/* หรือ <h2>{name}</h2> ถ้าใช้ destructuring */}
      <p>{props.jobTitle}</p> {/* หรือ <p>{jobTitle}</p> */}
      <button onClick={toggleFollow}>
        {" "}
        {/* event handler คือ onClick={function} */}
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default UserProfileCard;
