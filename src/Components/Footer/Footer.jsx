import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* About Madrasa */}
          <div className="text-center md:text-left">
            <div className="flex md:justify-start md:items-start items-center justify-center">
              <img
                src="https://yt3.googleusercontent.com/tTk6W4SDnVODfST_CcBk2KvKQULjmyGFSYNIPfDv41qP-Qtzx86lfTSz9_Q_DpGgzT6CPKdC4g=s160-c-k-c0x00ffffff-no-rj"
                alt=""
                className="w-20 h-20 rounded-full"
              />
            </div>          <p className="text-sm text-gray-300 py-5">
              An Islamic institute dedicated to Quranic education, Tajweed, and Arabic language learning in Muzaffarnagar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/courses" className="hover:text-white">Courses</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://www.facebook.com/people/DarulFalah-Budhana/61562996768253/?mibextid=kFxxJD" target="_blank" className="text-white hover:text-gray-400 text-xl"><FaFacebookF /></a>
              <a href="https://www.instagram.com/darul_falah_budhana" target="_blank" className="text-white hover:text-gray-400 text-xl"><FaInstagram /></a>
              <a href="https://www.youtube.com/@DARULFALAHBUDHANA" target="_blank" className="text-white hover:text-gray-400 text-xl"><FaYoutube /></a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 text-[17px] pt-4 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Darul Falah Budhana. Developed By <a href="https://nk-frontend-developer.netlify.app/" className="text-green-500 md:mx-0 mx-8 underline">Nashra Khan.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
