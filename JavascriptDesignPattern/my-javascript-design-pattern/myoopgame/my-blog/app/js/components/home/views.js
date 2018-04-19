import $ from '../../core/yquery.js';
class Views {

    getDetail(event, title = '123', content = '234') {
        let tpl = `
                <h2>${title}</h2>
                <div>${content}</div>
            `;
        alert('1');
        $('.container').html(tpl);
    }
}

export default Views;