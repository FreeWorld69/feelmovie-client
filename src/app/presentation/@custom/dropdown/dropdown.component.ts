import { Component, EventEmitter, Input, Output } from '@angular/core';

export namespace Dropdown {
  export interface Item {
    title: string,
    value: any
  }
  export interface EmitItemProps {
    item: Item,
    index: number
  }
  export type Data = Array<Item>;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() public placeholder:string;
  @Input() public items: Dropdown.Data;
  @Output() public itemClicked: EventEmitter<Dropdown.EmitItemProps> = new EventEmitter();

  public opened: boolean = false;
  public activeItemIndex: number;
  public activeItem: Dropdown.Item;

  public onClick(index: number, item: Dropdown.Item) {
    this.close();
    this.activeItemIndex = index;
    this.activeItem = item;
    this.itemClicked.emit({ item, index })
  }

  public toggle(): void {
    this.opened = !this.opened;
  }

  public close(): void {
    this.opened = false
  }

  public get getDropdownPresentationName(): string {
    return this.activeItemIndex ? this.items[this.activeItemIndex]?.title : this.placeholder;
  }
}
