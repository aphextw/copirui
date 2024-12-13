import Button from "./components/button/button";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const uroki = 3;
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function about() {
  return (
    <div className="about">
      <div>
        <h1 style={{ fontSize: "40px" }}>
          <span style={{ color: "#F73D48" }}>Перемена</span> - это приложение с
          удобным и{" "}
        </h1>
        <h1 style={{ fontSize: "40px" }}>
          быстрым доступом к полезной информации и{" "}
        </h1>
        <h1 style={{ fontSize: "40px" }}>механикам для школьников</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div className="kalendar">
          {" "}
          <h3>
            <span
              style={{
                color: "#F73D48",
                fontWeight: "lighter",
                fontSize: "14px",
              }}
            >
              {" "}
              Сегодня {uroki} урока
            </span>
          </h3>
          <img
            style={{ marginLeft: "150px" }}
            src="./src/images/calendar.png"
            alt="error"
          />
          <h1 style={{ fontSize: "20px" }}>Календарь занятий</h1>
          <h3 style={{ fontWeight: "lighter", color: "#585858" }}>
            Через {2} дня выходной
          </h3>
          <Button
            style={{
              backgroundColor: "#fff",
              fontWeight: "lighter",
              textAlign: "center",
              fontSize: "16px",
              padding: "10px",
              height: "44px",
              width: "311px",
              color: "#000",
            }}
          ></Button>
          <Button
            style={{
              fontWeight: "lighter",
              textAlign: "left",
              fontSize: "14px",
              padding: "10px",
              width: "311px",
              height: "44px",
            }}
          >
            Посмотреть расписание
          </Button>
          <Button
            style={{
              backgroundColor: "#fff",
              fontWeight: "lighter",
              textAlign: "center",
              fontSize: "16px",
              padding: "10px",
              width: "311px",
              height: "44px",
              color: "#000",
            }}
          >
            Добавить запись
          </Button>
        </div>

        <div className="kalendar">
          <h2>Домашняя работа</h2>
          <h3 style={{ fontWeight: "lighter", color: "#585858" }}>
            База знаний по учебным материалам
          </h3>
          <Button
            style={{
              backgroundColor: "#fafafa",
              fontWeight: "lighter",
              textAlign: "left",
              fontSize: "14px",
              padding: "10px",
              width: "311px",
              height: "48px",
              color: "#000",
            }}
          >
            Математика
          </Button>
          <Button
            style={{
              backgroundColor: "#fafafa",
              fontWeight: "lighter",
              textAlign: "left",
              fontSize: "14px",
              padding: "10px",
              width: "311px",
              height: "48px",
              color: "#000",
            }}
          >
            Литература{" "}
          </Button>
          <Button
            style={{
              backgroundColor: "#fafafa",
              fontWeight: "lighter",
              textAlign: "left",
              fontSize: "14px",
              padding: "10px",
              width: "311px",
              height: "48px",
              color: "#000",
            }}
          >
            География
          </Button>
          <Button
            style={{
              fontWeight: "lighter",
              textAlign: "left",
              fontSize: "14px",
              padding: "10px",
              width: "311px",
              height: "44px",
            }}
          >
            Посмотреть все задания
          </Button>
        </div>
        <div className="kalendar">
          <h2>Учебные материалы</h2>
          <h3 style={{ fontWeight: "lighter", color: "#585858" }}>
            База знаний по учебным материалам
          </h3>
          <Carousel
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            customRightArrow={<Button />}
            customLeftArrow={<Button />}
            customTransition="all .5"
            transitionDuration={500}
            responsive={responsive}
            minimumTouchDrag={50}
            sliderClass="sliderrr"
            autoPlaySpeed={1000}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={false}
            ssr={true}
          >
            <div
              style={{
                borderRadius: "12px",
                height: "136px",
                width: "107px",
              }}
            >
              <img src="./src/images/history.png" alt="error" />
              <b>История</b>
              <h6 style={{ fontWeight: "lighter", color: "#585858" }}>
                {32} тем
              </h6>
            </div>
            <div
              style={{
                borderRadius: "12px",
                height: "136px",
                width: "107px",
              }}
            >
              <img src="./src/images/math.png" alt="error" />
              <b>Математика</b>
              <h6 style={{ fontWeight: "lighter", color: "#585858" }}>
                {20} тем
              </h6>
            </div>
            <div
              style={{
                borderRadius: "12px",
                height: "136px",
                width: "107px",
              }}
            >
              <img
                style={{ marginBottom: "7px" }}
                src="./src/images/russian.png"
                alt="error"
              />
              <b>Рус.яз</b>
              <h6 style={{ fontWeight: "lighter", color: "#585858" }}>
                {52} тем
              </h6>
            </div>
            <div
              style={{
                borderRadius: "12px",
                height: "136px",
                width: "107px",
              }}
            >
              <img
                style={{ marginBottom: "7px" }}
                src="./src/images/history.png"
                alt="error"
              />
              <b>География</b>
              <h6 style={{ fontWeight: "lighter", color: "#585858" }}>
                {42} тем
              </h6>
            </div>
          </Carousel>
          <Button
            style={{
              fontWeight: "lighter",
              textAlign: "left",
              fontSize: "14px",
              padding: "10px",
              width: "311px",
              height: "48px",
            }}
          >
            Посмотреть все
          </Button>
        </div>
      </div>
    </div>
  );
}
