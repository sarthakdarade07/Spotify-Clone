import { useNavigate } from "react-router-dom";

function InstallApp(props){
  let navigate=useNavigate();
    function funClose() {
      navigate(-1);
    }
return (
  <>
    {/* -------------------------Close Button ------------------------*/}
    <div style={{ marginLeft: "90%" }}>
      <button
        type="button"
        class="btn btn-dark"
        style={{
          position: "fixed",
          borderRadius: "50%",
        }}
        onClick={funClose}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    {/*----------------------- DownLoad App  Image --------------------------------*/}
    <img
      src="Images\Install_app_Img.png"
      style={{
        height: "100%",
        width: "100%",
        marginBottom: "20%",
        borderRadius: "2%",
      }}></img>
  </>
);
}

export default InstallApp;