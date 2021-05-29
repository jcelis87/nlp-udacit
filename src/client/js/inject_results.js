
export function injectResults (results, excludedProperties){

    const result_list_container = document.getElementById('results');
    if (result_list_container.hasChildNodes()){
        result_list_container.removeChild(result_list_container.firstChild);
    }
    
    const results_list = document.createElement('ul');
    results_list.classList.add('result-item');

    for (const result in results){
        if (excludedProperties.includes(result)) {
            // do nothing
        } else {
            const result_item = document.createElement('li');
            if (result == 'status') {
                result_item.innerText = `${result}: ${results.status.msg}`;
            } else {
                result_item.innerText = `${result}: ${results[result]}`;
            }
            results_list.appendChild(result_item);
        }
    }
    document.getElementById('results').appendChild(results_list);
};