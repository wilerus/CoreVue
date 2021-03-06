const LoginForm = () => import('../../modules/login/LoginForm.vue').then(m => m.default);

const loginRoutes = [{ name: 'login', path: '/login', component: LoginForm }, { name: 'default', path: '/', component: LoginForm }];

export default loginRoutes;
