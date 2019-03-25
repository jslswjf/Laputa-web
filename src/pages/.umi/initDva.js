import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'course', ...(require('/mnt/d/linux_code/Laputa-web/src/models/course.ts').default) });
app.model({ namespace: 'session', ...(require('/mnt/d/linux_code/Laputa-web/src/models/session.ts').default) });
app.model({ namespace: 'version', ...(require('/mnt/d/linux_code/Laputa-web/src/models/version.ts').default) });
