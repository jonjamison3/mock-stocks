import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketCap'
})
export class MarketCapPipe implements PipeTransform {

  transform(value: number): string {
    let following = ''
    let result = '$'
    if (value > 1000000000000) {
      result += (value / 1000000000000).toFixed(1); 
      following = ' T';
    } else if (value > 1000000000) {
      result += (value / 1000000000).toFixed(1); 
      following = ' B';
    } else if (value > 1000000) {
      result += (value / 1000000).toFixed(1); 
      following = ' M';
    } else if (value > 1000) {
      result += (value / 1000).toFixed(1); 
      following = ' K';
    }

    if (result.charAt(result.length - 1) === '0') {
      let resultArr = result.split(''); 
      resultArr.splice(resultArr.length - 2);
      result = resultArr.join('');
    }
    
    return result + following; 
  }

}
