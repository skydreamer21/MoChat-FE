import HeadBar from "../../components/HeadBar/HeadBar";
import NavBar from "../../components/NavBar/NavBar";

export default function MainPage() {
  return (
    <>
      <HeadBar
        pagename="내 그룹"
        center={true}
        backbtn={true}
        setbtn={true}
      ></HeadBar>
      <div className="bg-background h-full">Here is Main Page</div>
      <NavBar />
    </>
  );
}
