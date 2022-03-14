import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BlogsNews(props) {
  const data = [
    {
      image: "/images/blog.jpg",
      title: "Health Stakeholders Should Be Guiding Policy, and the White House Agrees",
      description: "Maternal health initiatives have been gaining traction on the national stage, and policy-makers are looking to innovator...",
      date:"12-03-2020",
      name:"James Bond"
    },
    {
        image: "/images/blog.jpg",
        title: "Health Stakeholders Should Be Guiding Policy, and the White House Agrees",
        description: "Maternal health initiatives have been gaining traction on the national stage, and policy-makers are looking to innovator...",
        date:"12-03-2020",
        name:"James Bond"
      },
      {
        image: "/images/blog.jpg",
        title: "Health Stakeholders Should Be Guiding Policy, and the White House Agrees",
        description: "Maternal health initiatives have been gaining traction on the national stage, and policy-makers are looking to innovator...",
        date:"12-03-2020",
        name:"James Bond"
      },
      {
        image: "/images/blog.jpg",
        title: "Health Stakeholders Should Be Guiding Policy, and the White House Agrees",
        description: "Maternal health initiatives have been gaining traction on the national stage, and policy-makers are looking to innovator...",
        date:"12-03-2020",
        name:"James Bond"
      },
      {
        image: "/images/blog.jpg",
        title: "Health Stakeholders Should Be Guiding Policy, and the White House Agrees",
        description: "Maternal health initiatives have been gaining traction on the national stage, and policy-makers are looking to innovator...",
        date:"12-03-2020",
        name:"James Bond"
      },
  ];
  // responseive config
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container-fluid px-0">
      <div className="footer">
        <div className="row mx-0 justify-content-center py-5">
          <div className="col-lg-10">
            <div className="community-text pb-4">
              <h6>Health News</h6>
            </div>
           <div className="my-5">
           <Carousel
              // swipeable={false}
              // draggable={false}
              // showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // customTransition="all .5"
              // draggable={false}
              transitionDuration={400}
              containerClass=""
              // customLeftArrow={<CustomLeftArrow />}
              // customRightArrow={<CustomRightArrow />}
              //   customDot={<CustomDot />}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop,"]}
              deviceType={props.deviceType}
              // renderDotsOutside={true}
              // dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
            >
              {data.map((el) => {
                return (
                  <div className="blog-card">
                  <div className="blog-card-img">
                  <img alt="" src={el.image}></img>
                  </div>
                    <div className="date-name pb-3">
                        <p>{el.date}</p>
                        <p>{el.name}</p>
                    </div>
                    <div class="blog-title px-4">{el.title}</div>
                    <div className="blog-description px-4">
                        {el.description}
                      </div>
                      <div className="blog-link">
                          <a href="#/">Read Article</a>
                      </div>
                  </div>
                );
              })}
            </Carousel>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
