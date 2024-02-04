import { ReactNode } from "react";
import "./globals.css";

interface IRootProps {
  children: ReactNode;
}
const RootLayout = ({ children }: IRootProps) => {
  return (
    <html>
      <body>
        <div className="container header">
          <img
            width="135"
            src="https://daryo.uz/logo/logo-white.svg"
            alt="Daryo"
          />
          <div className="menu__location">
            <div className="menu__text">mahalliy o'zb</div>
            <div className="menu__text">markaziy osiyo</div>
            <div className="menu__text">dunyo</div>
            <div className="menu__text">pul</div>
            <div className="menu__text">madaniyat</div>
            <div className="menu__text">layfestayle</div>
            <div className="menu__text">sport</div>
            <div className="menu__text">multimediya</div>
          </div>
          <div className="menu__action">
            <svg
              className="cursor__pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
            </svg>
            <svg
              className="cursor__pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
            <div className="menu__text">o'zb</div>
            <svg
              className="cursor__pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </div>
        <div className="container main">
          {children}
          <div className="sidebar">
            <div className="sidebar__btn">So'ngi yangiliklarga o'tish</div>
            <hr />
            <div className="last__news">
              <div>
                <h4>
                  Lisichansk o'qqa tutilishi oqibatida 28 kishi halok bo'ldi
                </h4>
                <h6>BUGUN, 16:42</h6>
              </div>
              <img
                width="92"
                height="69"
                src="	https://daryo.uz/static/2024/02/thumb-65bf7690a96c8.jpg"
                alt=""
              />
            </div>
            <div className="last__news">
              <div>
                <h4>
                  O'zbekiston aholisining qancha qismi mehnatga layoqatligi
                  e'lon qilindi
                </h4>
                <h6>BUGUN, 16:20</h6>
              </div>
              <img
                width="92"
                height="69"
                src="https://daryo.uz/static/2024/02/65bf64d7da414.jpg"
                alt=""
              />
            </div>
            <div className="last__news">
              <div>
                <h4>Rasman: Jaloliddin Masharipov - 'ISTIQILOL' futbolchisi</h4>
                <h6>BUGUN, 14:24</h6>
              </div>
              <img
                width="92"
                height="69"
                src="https://daryo.uz/static/2024/02/65bf57e31fd23.jpg"
                alt=""
              />
            </div>
            <div className="last__news">
              <div>
                <h4>
                  Toshkent atrofidagi hududlardan metro bekatlarigacha express
                  aftobuslari qo'yilishi kutilmoqda' futbolchisi
                </h4>
                <h6>BUGUN, 14:15</h6>
              </div>
              <img
                width="92"
                height="69"
                src="https://daryo.uz/static/2024/02/65bf5317bbfd2.jpg"
                alt=""
              />
            </div>
            <div className="last__news">
              <div>
                <h4>
                  Srechko Katanes: “Osiyo Kubogida ko'rsatgan natijamizdan
                  qoniqish hosil qildim
                </h4>
                <h6>BUGUN, 13:03</h6>
              </div>
              <img
                width="92"
                height="69"
                src="https://daryo.uz/static/2024/02/65bf44e94320d.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main__footer">
          <div className="container footer">
            <img
              width="182"
              src="https://daryo.uz/logo/logo-white.svg"
              alt="daryo"
            />
            <p>
              “Daryo” internet-nashrining O'zbekiston matbuot va axborot
              agentligi O'zMAA, hozirgi O'zbekiston Respublikasi Prezidenti
              Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar
              agentligi tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma
              bilan ommaviy axborot vositasi sifatida ro'yxatga olingan. Matnli
              materiallarni to'liq ko'chirish yoki qisman iqtibos keltirishga,
              shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan
              foydalanishga “daryo.uz” saytiga giperhavola mavjud bo'lgan
              va/yoki “Daryo” internet-nashrining muallifligini ko'rsatuvchi
              yozuv ilova qilingan taqdirda yo'l qo'yiladi. Chop etiladigan
              ba'zi ma'lumotlar 18 yoshga to'lmagan foydalanuvchilarga
              mo'ljallanmagan bo'lishi mumkin. Info@daryo.uz
            </p>
            <div className="socialmedia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="rgba(251,251,251,1)"
              >
                <path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="rgba(255,255,255,1)"
              >
                <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="rgba(244,244,244,1)"
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="footer__description">
          <div className="container footer__description">
            <h3>© «Simple Networking Solutions» MChJ, 2013-2024</h3>
            <h3>18+ Yosh bo'yicha cheklov</h3>
            <h3>Xato topdingizmi? Ctrl+Enter'ni bosing</h3>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
