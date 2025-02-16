import "./index.css";
import "./App.css"
import logo from "./assets/Logo (3).png"
import img1 from "./assets/Device.png"
import img2 from './assets/iPhone X Portrait.png'
import icon1 from "./assets/icon-1.png"
import icon2 from "./assets/icon-2n.png"
import icon3 from "./assets/icon-3.png"
import icon4 from "./assets/icon-4.png"
import icon5 from "./assets/icon-5.png"
import picture from "./assets/Picture (3).png"
import picture2 from "./assets/Picture (4).png"
import map from "./assets/Contacts.png"
function App() {
  return <>
  <header className="">
    <nav className="py-[20px] w-[90%] m-auto flex justify-between">
      <aside className="flex items-center gap-5">
        <img src={logo} alt="" />
        <ul className="lg:flex gap-[20px] hidden">
          <li><a href="" className="">About</a></li>
          <li><a href="" className="">Gallery</a></li>
          <li><a href="" className="">Pricing</a></li>
          <li><a href="" className="">FAQ</a></li>
          <li><a href="" className="">Benefits</a></li>
        </ul>
      </aside>
      <aside className="flex gap-5">
        <button className="text-[#6E38F7] cursor-pointer but-1">SIGN IN</button>
        <button className="text-[#6E38F7] cursor-pointer but-1">SIGN UP</button>
      </aside>
    </nav>
    <section className="w-[90%] m-auto mt-[50px] flex flex-col lg:flex-row items-center gap-[100px]">
      <aside className="lg:text-left text-center lg:w-[433px]">
      <h1 className="text-[58px] text-center lg:text-start font-bold text-[#363940]">We Connect 
      Startups</h1>
      <div className="flex gap-5 py-[10px] ml-[15%] lg:ml-0">
        <button className="px-[20px] py-[10px] bg-[#6E38F7] text-white rounded-[5px] cursor-pointer">Download</button>
        <button className="px-[20px] py-[10px] border-2 text-[#6E38F7] rounded-[5px] cursor-pointer">Try for free</button>
      </div>
      <p className="text-[#95A1BB] py-10">Harness The Power Of Your Dreams</p>
      </aside>
      <aside className="relative right-[-5.5%]">
        <img src={img1} alt="" />
        <img src={img2} alt=""  className="absolute top-[20%] right-[50%] lg:w-auto w-[150px]"/>
      </aside>
    </section>
  </header>
  <main className="">
    <section className="mt-[200px] w-[90%] m-auto flex flex-col lg:flex-row gap-20">
      <aside className="lg:w-[220px]">
        <p className="text-[#363940] text-[18px] font-bold">The first</p>
        <p className="text-[#95A1BB] text-[16px] py-[5px]">Learn To Love Growth And Change And You Will Be A Success</p>
      </aside>
      <aside className="lg:w-[220px]">
        <p className="text-[#363940] text-[18px] font-bold">Second  </p>
        <p className="text-[#95A1BB] text-[16px] py-[5px]">A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More</p>
      </aside>
      <aside className="lg:w-[220px]">
        <p className="text-[#363940] text-[18px] font-bold">Third</p>
        <p className="text-[#95A1BB] text-[16px] py-[5px]">Converter Ipod Video Taking Portable Video Viewing To A Whole New Level</p>
      </aside>
      <aside className="lg:w-[220px]">
        <p className="text-[#363940] text-[18px] font-bold">Fourth</p>
        <p className="text-[#95A1BB] text-[16px] py-[5px]">The Small Change That Creates Massive Results In Your Life</p>
      </aside>
    </section>
    <section className="mt-[100px]">
      <aside className="w-[80%] text-center m-auto">
        <h2 className="text-[#363940] text-[36px] font-bold">There are many reasons to get down and start to get depressed about your situation </h2>
      <div className="flex gap-5 py-[20px] w-[270px] m-auto">
        <button className="px-[20px] py-[10px] bg-[#6E38F7] text-white rounded-[5px] cursor-pointer">Get started</button>
        <button className="px-[20px] py-[10px] border-2 text-[#6E38F7] rounded-[5px] cursor-pointer">View demo</button>
      </div>
      </aside>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <aside className="flex gap-[40px] items-center flex-wrap lg:w-[80%] w-[77%] m-auto">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
      </aside>
      <aside className="w-[65%] m-auto text-center mt-[50px]">
        <p className="text-[16px] text-[#95A1BB] ">Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place. </p>
        <div className="flex gap-5 py-[20px] w-[130px] m-auto">
        <button className="px-[20px] py-[10px] bg-[#6E38F7] text-white rounded-[5px] cursor-pointer">Get started</button>
      </div>
      </aside>
    </section>
    <section className="flex flex-col lg:flex-row gap-[50px] w-[90%]  m-auto mt-[100px]">
      <h2 className="font-bold text-[36px] text-[#363940]">$9.99/mo</h2>
      <p className="text-[#95A1BB] text-[16px] py-[5px] w-[400px]">What happened a few moments or several years ago is gone, what will happen this evening.</p>
      <p className="text-[#95A1BB] text-[16px] py-[5px]">Secure payments <br />powered by Containers</p>
      <button className="px-[50px]  bg-[#6E38F7] text-white rounded-[5px] cursor-pointer">Buy now</button>
    </section>
    <section className="flex items-center flex-col lg:flex-row gap-10 w-[90%] m-auto mt-[100px]">
      <aside className="lg:w-[400px]">
        <h2 className="text-[#363940] text-[36px] font-bold">Portfolio</h2> 
        <p className="text-[#95A1BB] text-[16px] py-[5px]">Failure will never overtake me if my determination to succeed is strong enough. </p>
      </aside>
      <img src={picture} alt="" />
    </section>
    <section className="flex flex-col lg:flex-row w-[90%] m-auto mt-[100px]">
      <aside className="lg:w-[500px]">
        <h2 className="text-[#363940] text-[36px] font-bold">Optimism is the faith achievement</h2>
        <p className="text-[#95A1BB] text-[16px] py-[5px]">Trends</p>
      </aside>
      <p className="text-[#363940] text-[16px] py-[5px] lg:w-[600px]">Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.  What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.</p>
    </section>
    <section className="w-[90%] m-auto mt-[100px]">
      <img src={map} alt="" />
    </section>
    <section className="mt-[100px]">
      <aside className="w-[80%] text-center m-auto">
        <h2 className="text-[#363940] text-[36px] font-bold">There are many reasons to get down and start to get depressed about your situation </h2>
      <div className="flex gap-5 py-[20px] w-[130px] m-auto">
        <button className="px-[20px] py-[10px] bg-[#6E38F7] text-white rounded-[5px] cursor-pointer">Get started</button>
      </div>
      </aside>
    </section>
    <section className="lg:w-[90%] w-[50%] m-auto flex flex-col lg:flex-row gap-20 mt-[100px]">
      <aside className="">
        <img src={picture2} alt="" />
        <p className="text-[#6E38F7] text-[12px] font-bold">$89.90</p>
        <p className="text-[#363940] font-bold">iPhone 11 Pro Max</p>
      </aside>
      <aside className="relative">
        <img src={picture2} alt="" />
        <p className="p-[5px] w-[45px] text-white absolute lg:top-[8%] lg:right-0 top-[8%] right-[50px] rounded-xl bg-[#6E38F7]">New</p>
        <p className="text-[#6E38F7] text-[12px] font-bold">$199.90</p>
        <p className="text-[#363940] font-bold">Macbook Air</p>
      </aside>
      <aside className="">
        <img src={picture2} alt="" />
        <p className="text-[#6E38F7] text-[12px] font-bold">$89.90</p>
        <p className="text-[#363940] font-bold">Watch Series 5</p>
      </aside>
      <aside className="">
        <img src={picture2} alt="" />
        <p className="text-[#6E38F7] text-[12px] font-bold">$129.90</p>
        <p className="text-[#363940] font-bold">iPad Pro</p>
      </aside>
    </section>
    <section className="w-[410px] text-center m-auto mt-[100px]"> 
    <h2 className="text-[#363940] text-[36px] font-bold">Newsletter</h2>
    <p className="text-[#95A1BB] text-[16px] py-[5px]">Failure will never overtake me if my determination to succeed is strong enough. </p>
    <div className="mt-[20px]">
      <input type="text" placeholder="Your email" className="px-[20px] py-[10px] border-2 border-[gray] mx-1 rounded-[10px]"/>
      <button className="px-[20px] py-[10px] bg-[#6E38F7] text-white rounded-[5px] cursor-pointer">Subscribe</button>
    </div>
    </section>
    <div className="lg:w-[640px] m-auto mt-[100px] text-center">
      <h2 className="text-[43px] text-[#363940] font-bold">Our best results for the year</h2>
    </div>
    <section className="flex flex-col lg:flex-row gap-[70px] mt-[50px] w-[85%] m-auto">
      <aside className="lg:w-[220px]">
        <h2 className="text-[43px] text-[#6E38F7] font-bold">40%</h2>
        <p className="text-[#95A1BB] text-[16px] ">Learn To Love Growth And Change And You Will Be A Success</p>
      </aside>
      <aside className="lg:w-[220px]">
        <h2 className="text-[43px] text-[#363940] font-bold">20%</h2>
        <p className="text-[#95A1BB] text-[16px] ">A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More</p>
      </aside>
      <aside className="lg:w-[220px]">
        <h2 className="text-[43px] text-[#363940] font-bold">3X</h2>
        <p className="text-[#95A1BB] text-[16px] ">Converter Ipod Video Taking Portable Video Viewing To A Whole New Level</p>
      </aside>
      <aside className="lg:w-[220px]">
        <h2 className="text-[43px] text-[#363940] font-bold">200+</h2>
        <p className="text-[#95A1BB] text-[16px] ">The Small Change That Creates Massive Results In Your Life</p>
      </aside>
    </section>
  </main>
  <footer className="mt-[100px]">
    <section className="w-[90%] m-auto flex flex-col lg:flex-row justify-between">
      <aside className="lg:w-[400px]">
        <p className="text-[#363940] text-[18px] font-bold">About the company</p>
        <p className="text-[#363940] text-[16px]">Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch Management For Home Users. The situation is different, but the conflict feels the same. </p>
      </aside>
      <div className="flex lg:gap-[100px] gap-[50px] lg:mt-0 mt-[40px]">
      <aside className="">
        <p className="text-[#363940] text-[18px] font-bold">Products</p>
        <p className="text-[#363940] text-[16px]">Pricing</p>
        <p className="text-[#363940] text-[16px]">Teams</p>
        <p className="text-[#363940] text-[16px]">Education</p>
        <p className="text-[#363940] text-[16px]">Refer a friend</p>
        <p className="text-[#363940] text-[16px]">Updates</p>
      </aside>
      <aside className="">
        <p className="text-[#363940] text-[18px] font-bold">Get Started</p>
        <p className="text-[#363940] text-[16px]">Tutorial</p>
        <p className="text-[#363940] text-[16px]">Resources</p>
        <p className="text-[#363940] text-[16px]">Guides</p>
        <p className="text-[#363940] text-[16px]">Examples</p>
        <p className="text-[#363940] text-[16px]">Docs</p>
      </aside>
      <aside className="">
        <p className="text-[#363940] text-[18px] font-bold">About</p>
        <p className="text-[#363940] text-[16px]">Stories</p>
        <p className="text-[#363940] text-[16px]">Community</p>
        <p className="text-[#363940] text-[16px]">Blog</p>
        <div className="flex gap-[10px]">
        <p className="text-[#363940] text-[16px]">Careers</p> 
        <span className="text-[#6E38F7] font-bold">NEW</span>
        </div>
        <p className="text-[#363940] text-[16px]">Brand Assets</p>
      </aside>
      </div>
    </section>
  </footer>
  </>;
}
export default App;
