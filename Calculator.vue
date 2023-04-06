<template>
    <div class="calculator">
        <div class="header">
            Zastanów się nad powtarzalnym zadaniem w Twojej firmie
            <span class="r">
                Następnie podaj dane w formularzu.
            </span>
        </div>
        <div class="box">
            Ile osób wykonuje to zadanie w Twojej firmie?
            <el-input-number v-model="workers" :min="1" :controls="false" />
            <div class="controls">

                <button @click="workers--">
                    <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="4" rx="2" fill="#1A5AF0" />
                    </svg>

                </button>
                <button @click="workers++">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="8" width="20" height="4" rx="2" fill="#1A5AF0" />
                        <rect x="8" y="20" width="20" height="4" rx="2" transform="rotate(-90 8 20)" fill="#1A5AF0" />
                    </svg>

                </button>
            </div>
        </div>

        <div class="box">
            Ile godzin jedna osoba przeznacza w ciągu dnia na to zadanie?
            <el-input-number v-model="hours" :controls="false" />
            <el-slider :min="1" :max="24" v-model="hours" :show-tooltip="false" />
        </div>

        <div class="box">
            Ile złotych kosztuje godzina pracy pracownika?
            <el-input-number v-model="rbh" :controls="false" />
            <el-slider :min="10" :max="300" v-model="rbh" :show-tooltip="false" />
        </div>
       
        <div class="box">
            Ile dni w miesiącu pracownicy poświęcają na zadanie?
            <el-input-number v-model="days" :controls="false" />
            <el-slider :min="1" :max="20" v-model="days" :show-tooltip="false" />
        </div>

        <!-- <div class="box">
            Jak często zdarzają się w zadaniu błędy?
            <el-input-number v-model="issues" :controls="false" />
            <el-slider :min="1" :max="10" v-model="issues" :show-tooltip="false" />
        </div> -->
        <div class="remember">
            <div class="trophy">
                <svg width="46" height="64" viewBox="0 0 46 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M39.8502 37.5885C42.899 33.8312 44.8582 29.3164 45.5168 24.5312C46.8119 15.0168 42.9071 7.48594 34.5221 3.32594C31.9333 2.04151 29.1139 1.35097 26.4485 0.754161C19.6215 -0.774554 13.3705 0.41005 7.86804 4.27373C3.39035 7.41832 0.930169 11.2593 0.347067 16.0166C-0.0925431 19.6407 0.145649 23.3144 1.04961 26.8521C2.87393 34.074 6.13802 39.7499 11.0281 44.2037C11.1499 44.3148 11.2733 44.4253 11.397 44.5356C11.9414 44.9933 12.443 45.499 12.8958 46.0467C13.3104 46.5836 13.7879 47.2767 13.7994 47.8738C13.8415 50.1143 13.7103 52.3226 13.5624 54.3734C13.4707 55.6433 13.3238 56.9332 13.1816 58.1809C13.0946 58.9432 13.0078 59.7057 12.9322 60.4703C12.7639 62.1679 13.3455 63.0171 14.9395 63.4016C15.8852 63.6355 16.8554 63.7567 17.8297 63.7632H17.9193C21.1477 63.7359 24.4273 63.6623 27.6009 63.591L29.7179 63.5439C31.7728 63.4991 32.6008 62.7543 32.773 60.7958C33.0746 57.365 33.2194 54.7309 33.2416 52.2541L33.2448 51.9893C33.2625 50.5199 33.2824 48.8624 31.996 47.4453L34.3898 44.4409C36.2146 42.1497 38.0348 39.8657 39.8502 37.5885ZM29.7556 47.0272L26.171 46.7574C26.166 46.7285 26.1652 46.6992 26.1684 46.67C26.6966 44.6478 27.2303 42.6271 27.7692 40.6082C28.9681 36.0921 30.2075 31.4221 31.3329 26.8048C32.2014 23.2424 32.2291 20.0856 31.4168 17.1543C31.0172 15.712 30.2582 14.6467 29.2213 14.0735C28.7219 13.813 28.1748 13.6558 27.6129 13.6116C27.051 13.5674 26.4856 13.6371 25.9515 13.8164C25.5257 13.9575 25.1156 14.1417 24.7275 14.366L24.5681 14.4507C24.3172 14.5836 24.0844 14.7369 23.8379 14.8974L23.7022 14.9859C23.6345 14.9011 23.5684 14.8165 23.5025 14.7324C23.2616 14.4134 23.0044 14.1069 22.7318 13.8141C21.2831 12.3075 19.1984 12.1608 17.5432 13.4499C16.423 14.353 15.5739 15.5455 15.089 16.8968C13.3823 21.2558 13.2555 25.8008 14.7124 30.4052C15.4748 32.8148 16.2824 35.2536 17.0646 37.6117C17.3595 38.5014 17.6536 39.3914 17.947 40.2815C18.5854 42.2787 18.9588 44.3501 19.0578 46.4437H16.3234C16.1711 44.4789 14.8597 43.1466 13.5919 41.8565C13.3566 41.6182 13.1215 41.3788 12.8933 41.1353C7.65714 35.5585 4.78371 29.5857 4.10939 22.8756C3.87704 20.5648 3.70506 18.1044 4.01687 15.7681C4.48732 12.2429 6.5079 9.29016 10.1936 6.74057C14.6828 3.63527 19.6752 2.63234 25.0292 3.75963C27.8521 4.35358 30.5945 4.99332 33.1178 6.2793C39.65 9.60938 42.6371 15.4045 41.7553 23.0385C41.1474 28.3023 38.713 32.9436 33.8619 38.088C32.5882 39.4396 31.1656 41.0976 30.2723 43.1487C29.8084 44.2141 29.3567 45.4712 29.7556 47.0272ZM29.9187 53.5539L29.7692 55.8519H16.2526V53.1462L29.9187 53.5539ZM29.5002 58.7905L29.4221 60.5562C25.3782 60.7347 20.7161 60.8856 16.1135 60.5359C16.1044 60.4732 16.095 60.4141 16.0875 60.3582C16.0543 60.1933 16.0373 60.0257 16.0369 59.8577C16.055 59.4659 16.0932 59.0722 16.1332 58.6557C16.1426 58.5594 16.1519 58.4619 16.1611 58.3633L29.5002 58.7905ZM16.0179 48.7326L16.4034 48.7438C21.0541 48.8796 25.4508 49.0081 29.9466 49.4743L30.012 50.5803C25.407 50.8342 20.7913 50.8232 16.1878 50.547L16.0179 48.7326ZM19.498 36.8845C19.3286 36.3488 19.1582 35.8132 18.9969 35.2759C18.1187 32.365 17.2743 29.5092 16.5958 26.5751C15.9651 23.8496 16.3344 20.9651 17.7542 17.4974C18.0676 16.8032 18.5157 16.1775 19.073 15.6563C19.1763 15.5334 19.3044 15.4335 19.4491 15.3632C19.5937 15.2928 19.7516 15.2536 19.9125 15.2481C20.2172 15.2621 20.5331 15.4617 20.8512 15.8411C21.6716 16.8195 21.6893 17.0669 21.0205 18.2457C19.6598 20.6444 19.1056 22.9486 19.3264 25.2899C19.3782 26.0264 19.5509 26.7491 19.8377 27.4299C19.953 27.7728 20.1606 28.0778 20.4379 28.3114C20.7151 28.545 21.0515 28.6985 21.4103 28.7552C21.7691 28.8119 22.1366 28.7695 22.4729 28.6327C22.8092 28.4958 23.1012 28.2698 23.3175 27.9792C23.8022 27.4159 24.1821 26.771 24.4395 26.075C25.4137 23.6069 25.6016 20.9003 24.9774 18.3223C24.7806 17.4778 25.3805 16.7684 26.6242 16.3758C27.1291 16.2164 27.5259 16.2162 27.8027 16.3741C27.9461 16.4741 28.0672 16.6027 28.1579 16.7518C28.2488 16.9008 28.3074 17.0671 28.3298 17.2399C28.6435 18.6149 29.0316 20.326 28.8358 21.863C28.4961 24.5211 27.9177 27.2002 27.3576 29.7909C27.253 30.2782 27.1487 30.7652 27.0442 31.252C26.7086 32.8273 26.3419 34.4247 25.9871 35.9693C25.5112 38.0438 25.0201 40.1891 24.594 42.3125C24.414 43.3542 24.3136 44.4076 24.2937 45.4644C24.2744 45.8882 24.2548 46.323 24.2255 46.7684L21.0395 46.5732C21.4731 43.1287 20.4699 39.9555 19.4987 36.8845H19.498ZM22.1981 23.4747L22.3827 22.3444C22.382 22.7285 22.3199 23.1099 22.1989 23.4747H22.1981Z"
                        fill="white" />
                </svg>
            </div>
            <span class="title">
                Pamiętaj!
            </span>
            <span class="note r">
                Koszt automatyzacji ponosisz tylko raz.
            </span>
            <div class="nav_menu-cta-button-wrapper"><a href="https://app.zencal.io/o/automationtime/danielptasinski/automatyzacja-pierwsze-spotkanie?utm_source=automationtime.io&utm_medium=cpc&utm_campaign=homeCalculator" class="button-primary nav w-inline-block"><div class="button-text">Bezpłatna konsultacja</div><div class="button-gradient" style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div></a></div>
        </div>
        <div class="result">
            <div class="title">
                <div class="trophy">
                    <svg width="59" height="64" viewBox="0 0 59 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.0138 33.0627C34.6671 35.4098 35.8286 37.3047 37.0805 39.1964C38.1439 40.8035 39.4093 41.3854 41.34 41.2714C44.0942 41.1085 44.5207 41.6363 44.7328 44.4206C44.8899 46.4882 45.0355 48.5563 45.1985 50.7889C45.8081 50.7889 46.3382 50.7889 46.871 50.7889C48.6159 50.7889 49.9584 52.0027 50.0305 53.667C50.0928 55.1107 50.2831 56.5497 50.417 57.9891C50.5254 59.1546 50.7069 60.319 50.7252 61.4859C50.7517 63.2474 50.1018 63.8285 48.3248 63.7814C43.3841 63.6492 38.4445 63.4254 33.5035 63.3982C27.2017 63.3638 20.899 63.487 14.5967 63.542C13.6896 63.55 12.7815 63.5894 11.8758 63.5558C10.3609 63.4995 9.50428 62.6262 9.58724 61.1227C9.71977 58.7323 9.92519 56.3455 10.1174 53.9585C10.2016 52.9101 10.6677 52.1582 11.8021 51.9768C12.909 51.7996 14.0138 51.6084 15.3144 51.391C15.3924 50.5239 15.5 49.5509 15.5628 48.5753C15.6542 47.1311 15.7017 45.6842 15.7875 44.2394C15.9047 42.275 16.6065 41.47 18.5553 41.1981C19.6746 41.0413 20.8122 41.004 21.943 40.94C22.4082 40.9136 22.8341 40.9106 23.0886 40.4111C24.1952 38.2369 25.4606 36.1342 26.0931 33.7487C26.1569 33.4293 26.2012 33.1063 26.2256 32.7816C25.8877 32.6599 25.6016 32.5452 25.3082 32.4534C22.3029 31.5119 19.6455 29.7014 17.6727 27.2514C17.1616 26.6328 16.5843 26.4252 15.8308 26.2951C11.6176 25.5684 7.71412 24.0754 4.35846 21.3647C2.17517 19.601 0.70062 17.3867 0.228814 14.568C-0.556027 9.86216 3.21441 5.23438 7.98283 5.10347C9.56365 5.0601 11.1469 5.09657 12.7709 5.09657C12.9951 4.19924 13.161 3.45687 13.3667 2.72801C13.6967 1.55777 14.2552 0.66231 15.6884 0.691665C16.2662 0.704095 16.847 0.460284 17.4277 0.453673C26.0884 0.35406 34.7493 0.269213 43.4101 0.199219C43.9516 0.207182 44.4908 0.273603 45.0177 0.397308C46.215 0.650928 46.8731 1.45728 47.1475 2.60637C47.2535 3.04566 47.3306 3.4913 47.447 4.06254C47.7947 4.06254 48.1412 4.06677 48.4876 4.06254C50.0289 4.03953 51.5702 3.99669 53.1116 3.99325C56.4866 3.98558 59.2705 6.55561 58.958 10.5482C58.3695 18.0687 52.5775 23.9007 46.1219 25.0384C46.0795 25.0537 46.0347 25.0626 45.9894 25.0648C44.2681 24.798 43.5453 25.882 42.713 27.1615C40.7102 30.2356 37.8539 32.2315 34.0138 33.0627ZM16.0126 2.96026C15.9503 3.33315 15.9031 3.55052 15.8785 3.77081C15.3048 9.13708 15.8462 14.5637 17.4688 19.7118C19.2065 25.3658 23.0048 28.9366 29.072 29.7159C32.9249 30.2113 36.42 29.4914 39.0183 26.3515C39.8493 25.3393 40.548 24.2259 41.0975 23.038C43.8541 17.0963 44.6066 10.8433 43.804 4.37799C43.751 3.94718 43.624 3.52542 43.5016 2.96026H16.0126ZM12.4944 54.5889C12.6948 56.7118 12.8798 58.6722 13.0714 60.706C13.6811 60.706 14.1248 60.7229 14.5677 60.7033C18.1871 60.5446 21.8055 60.2741 25.4259 60.2379C32.1769 60.1704 38.929 60.2379 45.6809 60.2463C46.0695 60.2463 46.458 60.208 46.8914 60.185C47.0958 58.1465 47.2874 56.2344 47.4907 54.2081L12.4944 54.5889ZM40.5446 50.8793C40.7365 48.7128 41.1513 46.7034 41.1542 44.5695C33.6384 44.4121 26.2931 43.7737 18.7644 44.1292C19.0295 46.5984 19.2818 48.9424 19.5349 51.2985L40.5446 50.8793ZM12.6389 7.68198C10.9542 7.91815 9.44278 8.15349 7.92505 8.33571C6.39274 8.52083 5.37786 9.36711 4.65477 10.6725C3.47181 12.8107 3.70957 14.8949 5.10537 16.7705C7.45698 19.9322 10.903 21.3232 14.7559 22.4318C13.0709 17.5734 12.7227 12.7422 12.6389 7.68198ZM45.6371 20.9373C49.6618 19.725 52.3084 17.3957 53.8967 13.9555C54.4692 12.6354 54.8443 11.2385 55.0099 9.80956C55.1955 8.44308 54.545 7.61449 53.3422 7.42751C51.4682 7.13819 49.582 7.3482 47.5946 7.32176C47.8477 11.9446 47.1824 16.5718 45.6371 20.9373ZM30.9793 33.3531L29.1014 33.2558C28.2172 35.816 27.3722 38.2618 26.4851 40.8297H33.8709L30.9793 33.3531Z"
                            fill="#3A4342" />
                    </svg>
                </div> Wynik
            </div>

            <div class="entry">
                Koszt miesięczny Twoich pracowników:
                <span>
                    {{  monthly }} zł
                </span>
                
            </div>



            <div class="entry">
                Koszt roczny Twoich pracowników:
                <span>
                    {{  yearly }} zł
                </span>
                
            </div>



            <div class="entry">
                Koszt automatyzacji:
                <span>
                    <template v-if="cost === 15000">+</template>{{  cost }} zł
                </span>
                
            </div>



            <!-- <div class="entry">
                Ilość błędów:
                <span>0</span>
                
            </div> -->



            <div>
                <div class="calculated-title" v-if="savings > 0">
                    Twoja oszczędność w 12 pierwszych miesiącach:
                </div>
                <div class="calculated-cost" v-if="savings > 0">
                    {{ savings }} zł*
                </div>
                <div v-else style="line-height: 26px" class="calculated-title">
                    O wow! Naprawdę Twoi pracownicy pracują nad tym zdaniem tylko jeden dzień w miesiącu? W tym przypadku automatyzacja przyniesie oszczędności w kolejnym roku!
                </div>
                
            </div>
            <div class="disclaimer">
                *Kalkulator jest stworzony na podstawie kosztów automatyzacji prostych zadań, takich jak wysyłka faktur, generowanie ofert i umów, tworzenie chatbotów i raportowanie. Ostateczna cena zależy od wielu czynników i zostanie ustalona po szczegółowej analizie podczas spotkania. Umów się na konsultację, aby poznać dokładną cenę.
            </div>
        </div>
    </div>
</template>
<script>
    import {
        inRange
    } from 'lodash';
    function roundHundred(value){
   return Math.round(value/100)*100
}

    export default {
        data() {
            return {
                hours: 6,
                workers: 1,
                rbh: 80,
                issues: 0,
                days: 5,
                tiers: [
  {
      range: {
        min: 0,
      max: 5,
},
      rate: 7.00,
      multiplier: 2.00,
  },
  {
      range: {min: 5,
      max: 10,
},
      rate: 6.98,
      multiplier: 1.98,
  },
  {
      range: {min: 10,
      max: 15,
},
      rate: 6.96,
      multiplier: 1.96,
  },
  {
      range: {min: 15,
      max: 20,
},
      rate: 6.94,
      multiplier: 1.94,
  },
  {
      range: {min: 20,
      max: 25,
},
      rate: 6.92,
      multiplier: 1.92,
  },
  {
      range: {min: 25,
      max: 30,
},
      rate: 6.90,
      multiplier: 1.90,
  },
  {
      range: {min: 30,
      max: 35,
},
      rate: 6.88,
      multiplier: 1.88,
  },
  {
      range: {min: 35,
      max: 40,
},
      rate: 6.86,
      multiplier: 1.86,
  },
  {
      range: {min: 40,
      max: 45,
},
      rate: 6.84,
      multiplier: 1.84,
  },
  {
      range: {min: 45,
      max: 50,
},
      rate: 6.82,
      multiplier: 1.82,
  },
  {
      range: {min: 50,
      max: 55,
},
      rate: 6.80,
      multiplier: 1.80,
  },
  {
      range: {min: 55,
      max: 60,
},
      rate: 6.78,
      multiplier: 1.78,
  },
  {
      range: {min: 60,
      max: 65,
},
      rate: 6.76,
      multiplier: 1.76,
  },
  {
      range: {min: 65,
      max: 70,
},
      rate: 6.74,
      multiplier: 1.74,
  },
  {
      range: {min: 70,
      max: 75,
},
      rate: 6.72,
      multiplier: 1.72,
  },
  {
      range: {min: 75,
      max: 80,
},
      rate: 6.70,
      multiplier: 1.70,
  },
  {
      range: {min: 80,
      max: 85,
},
      rate: 6.68,
      multiplier: 1.68,
  },
  {
      range: {min: 85,
      max: 90,
},
      rate: 6.66,
      multiplier: 1.66,
  },
  {
      range: {min: 90,
      max: 95,
},
      rate: 6.64,
      multiplier: 1.64,
  },
  {
      range: {min: 95,
      max: 100
},
      rate: 6.62,
      multiplier: 1.62,
  },
  {
      range: {min: 100,
      max: 105
},
      rate: 6.60,
      multiplier: 1.60,
  },
  {
      range: {min: 105,
      max: 110
},
      rate: 6.58,
      multiplier: 1.58,
  },
  {
      range: {min: 110,
      max: 115
},
      rate: 6.56,
      multiplier: 1.56,
  },
  {
      range: {min: 115,
      max: 120
},
      rate: 6.54,
      multiplier: 1.54,
  },
  {
      range: {min: 120,
      max: 125
},
      rate: 6.52,
      multiplier: 1.52,
  },
  {
      range: {min: 125,
      max: 130
},
      rate: 6.50,
      multiplier: 1.50,
  },
  {
      range: {min: 130,
      max: 135
},
      rate: 6.48,
      multiplier: 1.48,
  },
  {
      range: {min: 135,
      max: 140
},
      rate: 6.46,
      multiplier: 1.46,
  },
  {
      range: {min: 140,
      max: 145
},
      rate: 6.44,
      multiplier: 1.44,
  },
  {
      range: {min: 145,
      max: 150
},
      rate: 6.42,
      multiplier: 1.42,
  },
  {
      range: {min: 150,
      max: 155
},
      rate: 6.40,
      multiplier: 1.40,
  },
  {
      range: {min: 155,
      max: 160
},
      rate: 6.38,
      multiplier: 1.38,
  },
  {
      range: {min: 160,
      max: 165
},
      rate: 6.36,
      multiplier: 1.36,
  },
  {
      range: {min: 165,
      max: 170
},
      rate: 6.34,
      multiplier: 1.34,
  },
  {
      range: {min: 170,
      max: 175
},
      rate: 6.32,
      multiplier: 1.32,
  },
  {
      range: {min: 175,
      max: 180
},
      rate: 6.30,
      multiplier: 1.30,
  },
  {
      range: {min: 180,
      max: 185
},
      rate: 6.28,
      multiplier: 1.28,
  },
  {
      range: {min: 185,
      max: 190
},
      rate: 6.26,
      multiplier: 1.26,
  },
  {
      range: {min: 190,
      max: 195
},
      rate: 6.24,
      multiplier: 1.24,
  },
  {
      range: {min: 195,
      max: 200
},
      rate: 6.22,
      multiplier: 1.22,
  },
  {
      range: {min: 200,
      max: 205
},
      rate: 6.20,
      multiplier: 1.20,
  },
  {
      range: {min: 205,
      max: 210
},
      rate: 6.18,
      multiplier: 1.18,
  },
  {
      range: {min: 210,
      max: 215
},
      rate: 6.16,
      multiplier: 1.16,
  },
  {
      range: {min: 215,
      max: 220
},
      rate: 6.14,
      multiplier: 1.14,
  },
  {
      range: {min: 220,
      max: 225
},
      rate: 6.12,
      multiplier: 1.12,
  },
  {
      range: {min: 225,
      max: 230
},
      rate: 6.10,
      multiplier: 1.10,
  },
  {
      range: {min: 230,
      max: 235
},
      rate: 6.08,
      multiplier: 1.08,
  },
  {
      range: {min: 235,
      max: 240
},
      rate: 6.06,
      multiplier: 1.06,
  },
  {
      range: {min: 240,
      max: 245
},
      rate: 6.04,
      multiplier: 1.04,
  },
  {
      range: {min: 245,
      max: Number.MAX_SAFE_INTEGER
},
      rate: 6.02,
      multiplier: 1.02,
  }
]
            }
        },
        computed: {
            multiplier() {
                for (let tier of this.tiers) {
                    console.log('>>',tier);
                    if (inRange(this.rbh, tier.range.min, tier.range.max + 1)) {
                        const t = tier.rate * tier.multiplier;
                        console.log(t)
                        return t;
                    }
                }
            },
            monthly() {
                return (this.hours * this.workers * this.rbh * this.days).toFixed(0);
            },
            yearly() {
                return (this.monthly * 12).toFixed(0);
            },
            cost() {
                // for (let tier of Object.values(this.tiers)) {
                //     if (inRange(this.yearly, tier.range.min, tier.range.max)) {
                //         return (tier.rate * this.yearly).toFixed(0);
                //     }
                // // }
                // console.log({
                //     rbh: this.rbh,
                //     multiplier: this.multiplier,
                // })
                    
                const cost = roundHundred(this.rbh * this.hours * this.multiplier);
                if (cost < 4000) {
                    return 4000;
                }

                if (cost > 15000) {
                    return 15000;
                }
                if (cost !== cost) {
                    return 15000;
                }
                return cost.toFixed(0);
            },
            savings() {
                return (this.yearly - this.cost).toFixed(0);
            }
        }

    }
</script>
<style lang="scss">
    .calculator {
        * {
            outline: none !important;
        }
        --el-color-primary: #1A5AF0;
        // --el-input-bg-color: #EFF3F5;
        // --el-input-text-color: #3A4342;

        font-family: 'Bai Jamjuree';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        padding: 64px;
        gap: 32px;
        column-gap: 48px;
        justify-content: center;

        /* Primary */

        background: #3A4342;
        border-radius: 24px;

        display: grid;
        grid-template-columns: 1fr 2fr;        
    }

    .header {
        max-width: 448px;
    }

    @media (max-width: 957px) {
        .calculator {
            grid-template-columns: 1fr;
            justify-content: center;
        }



        // "mobile"

        .box {
            gap: 18px;
            padding: 26px 34px 22px;
            font-size: 22px;
            line-height: 28px;
        }


        }
    .box {
        background: white;
        color: #3A4342;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 32px 40px 24px;
        gap: 24px;
        background: #FFFFFF;
        border-radius: 24px;

      
    }

    .header {
        font-family: 'Bai Jamjuree';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 130%;
        /* or 47px */


        /* White */

        color: #FFFFFF;
        grid-row: span 4;

    }

    .remember {
       .title {
        font-family: 'Bai Jamjuree';
font-style: normal;
font-weight: 700;
font-size: 80px;
line-height: 110%;
       }
        color: white;
        display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 32px;

    }

    .result {
        background: #EFF3F5;
        border-radius: 24px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 48px 40px 32px;
        // gap: 48px;


        gap: 34px;
    }

    .button {
        background: linear-gradient(50.43deg, #233CF2 15.71%, #00B2EB 59.62%, #233CF2 95.35%);
    }


    .controls {
        display: flex;
        // margin-top: 14px;
        gap: 28px;

        align-items: center;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0;
            background: transparent;
            padding: 0; margin: 0;
            cursor: pointer;
        }
    }

    .calculator {


        .el-input {
            border: 0;
            box-shadow: 0;
            width: 96px;
            height: 49px;
        }

        .el-input__wrapper {
            background-color: #EFF3F5;
            box-shadow: 0 !important;

            .el-input__inner {
                color: #3A4342;
            }
        }

        .el-slider__button {
            background: var(--el-color-primary);
        }

        .el-slider__runway {
            background-color: #EFF3F5;
        }
    }

    .result {
        color: #3A4342;
    }

    .result .title {
        display: flex;
        font-family: 'Bai Jamjuree';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 130%;
        gap: 32px;
    }

    .note {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;
    }

    .r,
    .entry {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;


    }

    .entry {

        width: 100%;
        padding-bottom: 24px;
        border-bottom: 2px solid #3A4342;

        &:last-child {
            border-bottom: 4px solid #3A4342; 
        }
    }


    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 32px;
    }

    .entry {
        display: flex;
        flex-direction: column;

        padding-bottom: 12px;

        span {
            font-family: 'Bai Jamjuree';
            font-style: normal;
            font-weight: 700;
            // font-size: 24px;
            line-height: 140%;

            font-size: 30px;
        }
    }

    .button {
        width: 459px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    padding: 16px 40px;
        border: 0;
        border-radius: 12px;
        box-sizing: border-box;
        color: white;
    }

    .calculated-cost {
        /* H2 */

font-family: 'Bai Jamjuree';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 130%;
/* or 62px */


/* Blue */

color: #1A5AF0;
    }

    .disclaimer {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */


        /* Primary */

        color: #3A4342;

        opacity: 0.87;
    }

    .calculated-title {
        font-size: 18px;
    }


    #app {
        width: 80%;
        margin: auto;
    }
</style>