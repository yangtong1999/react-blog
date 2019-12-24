import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();

// 2. Plugins
// app.use({});
const app = dva();
// 3. Model
app.model(require('./models/menu').default);
app.model(require('./models/lifeArticle').default);
app.model(require('./models/studyNotes').default);
app.model(require('./models/home').default);
app.model(require('./models/leaveMessage').default);
// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');