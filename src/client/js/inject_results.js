


export function injectResults (results, excludedProperties){

    const results_list = document.createElement('ul');

    for (const result in results){
        if (excludedProperties.includes(result)) {
            // do nothing
        } else {
            console.log(result, results[result]);
            const result_item = document.createElement('li');
            result_item.innerText = `${result}: ${results[result]}`;
            results_list.appendChild(result_item);
        }
    }

    document.getElementById('results').appendChild(results_list);

};