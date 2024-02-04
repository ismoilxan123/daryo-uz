import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="hero">
        <h2>|</h2>
        <h1 className="hero__title">So'ngi yangiliklar</h1>
      </div>
      <div className="main__news">
        <div className="main__news--one">
          <div className="main__img">
            <img
              width="367"
              src="https://daryo.uz/static/2024/02/thumb-65bf7690a96c8.jpg"
              alt="img"
            />
            <h3 className="img__absolute">Mahalliy</h3>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={"about"}
          >
            <h2>Lisichansk o'qqa tutilishi oqibatida 28 kishi halok bo'ldi</h2>
          </Link>
          <h5>BUGUN 14:15</h5>
          <p>
            Vayronalar ostida 40 ga yaqin odam bo'lishi mumkin, ularni qidirish
            va qutqarish ishlari davom etmoqda
          </p>
        </div>
        <div className="main__news--one">
          <div className="main__img">
            <img
              width="367"
              src="https://daryo.uz/static/2024/02/65bf64d7da414.jpg"
              alt="img"
            />
            <h3 className="img__absolute">Mahalliy</h3>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={"about"}
          >
            <h2>
              O'zbekiston aholisining qancha qismi mehnatga layoqatligi e'lon
              qilindi
            </h2>
          </Link>
          <h5>BUGUN 16:15</h5>
          <p>
            Statistika agentligi aholining yosh guruhlari bo'yicha tarkibini
            e'lon qildi
          </p>
        </div>
        <div className="main__news--one">
          <div className="main__img">
            <img
              width="367"
              src="https://daryo.uz/static/2024/02/65bf57e31fd23.jpg"
              alt="img"
            />
            <h3 className="img__absolute">Sport</h3>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={"about"}
          >
            <h2>Rasman: Jaloliddin Masharipov - 'ISTIQILOL</h2>
          </Link>
          <h5>BUGUN 14:24</h5>
          <p>Jaloliddin Eron klubi bilan shartnoma imzoladi</p>
        </div>
        <div className="main__news--one">
          <div className="main__img">
            <img
              width="367"
              src="https://daryo.uz/static/2024/02/65bf5317bbfd2.jpg"
              alt="img"
            />
            <h3 className="img__absolute">Mahalliy</h3>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={"about"}
          >
            <h2>
              Toshkent atrofidagi hududlardan metro bekatlarigacha express
              aftobuslari qo'yilishi kutilmoqda
            </h2>
          </Link>
          <h5>BUGUN 14:15</h5>
          <p>
            Jumladan, “Nazarbek” hududidan Chorsu va Paxtakor metro bekatigacha
            avtobus yo'nalishini tashkil qilish nazarda tutilgan
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
