import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Register from "../images/register.png";
import Logo from "../images/logo.png"
import Dark from "../images/dark.png"

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [zip, setZip] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            address,
            country,
            phone,
            zip,
            password,
            l
        }
        console.log(data);
    }




  return (
    <div>
      <Head>
        <title>Chemotronix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main
        className="flex bg-transparent text-black w-[100%]"
        data-theme="emerald"
      >
          <div className="flex items-center justify-center bg-[#DCFFEB] py-8 w-[0%] lg:w-[40%]">
            <div className="flex flex-col">
              <Image src={Register} />
            </div>
          </div>
          <div className="ml-5 w-[100%] lg:w-[60%] py-10 flex flex-col">
                <div className="flex flex-row justify-between">
                <Image src={Logo}/>
                  <br />
                  <button className="mr-10"><Image src={Dark} /></button>
                </div>
                <div className="w-full px-4 py-7">
                  <h6 className="text-3xl font-bold mb-5">Sign Up</h6>
                <div className="flex flex-col items-center w-full">

              <form onSubmit={handleSubmit} className="flex w-full flex-wrap">

                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Company">Company's Name</label>
                  <input
                    type="text"
                    id=""
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Company">Email Address</label>
                  <input
                    type="email"
                    id=""
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Address">Company's Address</label>
                  <input
                    type="text"
                    id=""
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Country">Country</label>
                  <input
                    type="country"
                    id=""
                    required
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Phone">Phone Number</label>
                  <input
                    type="phone"
                    id=""
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Zip">Zip Code</label>
                  <input
                    type="text"
                    id=""
                    required
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Company">Password</label>
                  <input
                    type="password"
                    id=""
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                <div className="w-[100%] lg:w-[45%] mr-10 mb-5">
                    <label htmlFor="Company">Confirm Password</label>
                  <input
                    type="password"
                    id=""
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full cursor-pointer px-3 py-3 border-2 mt-5 rounded-lg"
                  />
                </div>
                  
                <button
                  type="submit"
                  className="text-white bg-green-700 flex justify-center w-[95%] h-16 mt-10 rounded-md cursor-pointer px-12  items-center"
                > Sign Up
                </button>
              </form>
            </div>
          </div>
                </div>
      </main>
    </div>
  );
}
