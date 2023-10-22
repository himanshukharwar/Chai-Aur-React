// const StyledPassGenerator = styled.``

import { useState } from "react";

function PassGenerator() {
  // let [length, setLength] = useState(8);
  // let [numAllowed, setNUmAllowed] = useState(false);
  // let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  return (
    <>
      <div className="text-center text-3xl font-bold p-5 bg-blue-400">
        Password Generator 🔒
      </div>
      <div className="flex flex-wrap justify-center p-10">
        <input
          className="border-2 border-sky-500 p-2 m-2 rounded-md"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label className="border-2 border-sky-500 p-2 m-2 rounded-md text-sky-500 font-bold">
          check
        </label>
      </div>
      {/* <div className="flex justify-center p-2 rounded-md bg-blue-100">
        <iframe className="rounded-md m-5"
          src="https://www.youtube.com/embed/3ryID_SwU5E?si=oEtM2Ay50EJg7fx1"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe className="rounded-md m-5"
          src="https://www.youtube.com/embed/3ryID_SwU5E?si=oEtM2Ay50EJg7fx1"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </>
  );
}

export default PassGenerator;
