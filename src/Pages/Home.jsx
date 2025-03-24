import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery"
import Slider from "../Components/Slider/Slider"

function Home() {
    return (
        <>
            <Navbar />
            <Slider />

            {/* About Section */}
            <section className="py-20 px-4 md:px-6 lg:px-20 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-green-700 font-bold">
                    About Our Madrasa
                </h1>
                <p className="mt-5 text-gray-600 text-sm md:text-base lg:text-lg w-full max-w-none leading-relaxed md:px-10 lg:px-32">
                    Darul Falah Budhana is a dedicated Islamic institution located in Muzaffarnagar, near Bijnor. Our madrasa focuses on providing
                    quality Islamic education, including Quranic studies, Tajweed, and Arabic language. With a strong commitment to nurturing faith
                    and knowledge, we strive to guide students on the path of righteousness. Our experienced teachers ensure a supportive learning
                    environment, fostering both spiritual and academic growth.
                </p>
                <a
                    href="/about"
                    className="mt-6 md:mt-10 inline-block bg-green-500 px-5 py-3 md:px-6 md:py-3 rounded-lg shadow-md text-white hover:bg-green-600 transition duration-300"
                >
                    Learn More
                </a>
            </section>


            {/* Courses Section */}
            <section className="text-center mb-20 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700">
                    Our Courses
                </h1>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
                    {/* Course Cards */}
                    {[
                        { title: "Quran Memorization", desc: "Learn to recite and memorize the Holy Quran." },
                        { title: "Islamic Studies", desc: "Understand the basics of Islam and its teachings." },
                        { title: "Arabic Language", desc: "Learn to read, write, and speak Arabic fluently." },
                        { title: "Islamic Events", desc: "Organizing special events like Eid celebrations and religious discussions." },
                    ].map((course, index) => (
                        <div key={index} className="bg-green-600 shadow-lg rounded-lg w-full max-w-xs p-10 text-center">
                            <h3 className="font-bold text-white text-2xl">{course.title}</h3>
                            <p className="text-sm text-gray-100 py-2">{course.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PhotoGallery />
            <Footer />
        </>
    )
}

export default Home