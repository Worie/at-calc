import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Calculator from './Calculator.vue';



const app = createApp(Calculator, {});
app.use(ElementPlus);

app.mount('#app');