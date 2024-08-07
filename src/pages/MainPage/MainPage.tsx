import HeadBar from "../../components/Bar/HeadBar";
import NavBar from "../../components/Bar/NavBar";

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
