import Team from '../components/Team';

export default function About() {
    return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Team 
              imageUrl="https://cdn.rogerwest.com/wp-content/uploads/2014/06/monkey.jpg"
              name="Ilyasse Belmaati"
              role="Front-end Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Team 
              imageUrl="https://img.freepik.com/premium-photo/3d-man-sitting-with-laptop-3d-illustration-isolated-contains-clipping-path_1401-2830.jpg"
              name="M'hamed Alghali Joudary"
              role="Back-End Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Team 
              imageUrl="https://bleedingcool.com/wp-content/uploads/2021/03/BobsBurgers_1015_YTuTinaTambien_A15_05A_07_tk2-0230-1200x900.jpg"
              name="Danya Tazi Mokh"
              role="Database Designer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Team 
              imageUrl="https://img.freepik.com/free-photo/young-down-syndrome-man-smiling-face-portrait_53876-148037.jpg"
              name="Youssef Mouhim"
              role="Back-End Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </section>
    )
}