import './styles/base.scss';
import { showStyles } from './stylesEditor';
import { showResume, markdownToHtml } from './resumeEditor';


showStyles(0, () => {
  showResume(() => {
    showStyles(1, () => {
      markdownToHtml(() => {
        showStyles(2)
      })
    })
  })

});
