import {Component} from '@angular/core';

interface IBasicOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  intentionOptions: IBasicOption[] = [
    {label: 'Buy', value: 'bla'},
    {label: 'Gift', value: 'bla2'}
  ];

  selection: string = '';

  isChecked(item: IBasicOption): boolean {
    return this.selection === item.value;
  }

}
