import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [title, settitle] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobno, setmobno] = useState("");
  const [address, setaddress] = useState("");
  const [list, setlist] = useState([]);
  const css1 = " form-control my-1 ";

  const titlehandler = (e) => settitle(e.target.value);
  const fanmehandler = (e) => setfirstname(e.target.value);
  const lanmehandler = (e) => setlastname(e.target.value);
  const emailhandler = (e) => setemail(e.target.value);
  const mnhandler = (e) => setmobno(e.target.value);
  const adhandler = (e) => setaddress(e.target.value);

  const addUser = async () => {
    const url = "http://localhost:4000/yogesh";
    const user = {
      title: title,
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobno: mobno,
      address: address,
    };
    await axios.post(url, user);
    const newlist = [user, ...list];
    setlist(newlist);

    settitle("");
    setfirstname("");
    setlastname("");
    setemail("");
    setmobno("");
    setaddress("");
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center flex-column "
      style={{ height: "100vh", margin: "90px" }}
    >
      <h1 className=" text-light p-3">Registration Form</h1>
      <div>
        <input
          className={css1}
          style={{ border: "green solid 1px", width: "300px" }}
          type="text"
          value={title}
          placeholder="Enter Title..."
          onChange={titlehandler}
        />
      </div>
      <div>
        <input
          className={css1}
          style={{ border: "green solid 1px", width: "300px" }}
          type="text"
          value={firstname}
          placeholder="Enter Firstname"
          onChange={fanmehandler}
        />
      </div>
      <div>
        <input
          className={css1}
          style={{ border: "green solid 1px", width: "300px" }}
          type="text"
          value={lastname}
          placeholder="Enter lastname"
          onChange={lanmehandler}
        />
      </div>
      <div>
        <input
          className={css1}
          style={{ border: "green solid 1px", width: "300px" }}
          type="text"
          value={email}
          placeholder="Enter Your Email ID"
          onChange={emailhandler}
        />
      </div>
      <div>
        <input
          className={css1}
          style={{ border: "green solid 1px", width: "300px" }}
          type="text"
          value={mobno}
          placeholder="Enter Your Mob No"
          onChange={mnhandler}
        />
      </div>
      <div>
        <input
          className={css1}
          style={{ border: "green solid 1px", width: "300px" }}
          type="text"
          value={address}
          placeholder="Enter Your Address"
          onChange={adhandler}
        />
      </div>
      <div>
        <input
          className="btn btn-outline-success my-2"
          type="button"
          value="Sign Up"
          style={{ width: "300px" }}
          onClick={addUser}
        />
      </div>
      <div>
        {list.map((item, index) => (
          <div className="text-light" key={index}>
            {item.title},{item.firstname},{item.lastname},{item.email},{" "}
            {item.mobno},{item.address}
          </div>
        ))}
      </div>
    </div>
  );
}
