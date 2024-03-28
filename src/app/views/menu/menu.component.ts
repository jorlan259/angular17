/* eslint-disable quotes */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MenusInterface } from '@interfaces/menus/menus';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';
import { MenusServices } from '@service/menus.service';
import { menusComponents } from './components/menus-components';
import { ActiveWordMayusPipe } from "../../core/pipes/active-word-mayus.pipe";

@Component({
    selector: 'menus',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    viewProviders: [provideIcons({ octPlus })],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIconComponent, CommonModule, ...menusComponents, ActiveWordMayusPipe]
})

export class MenusComponent implements OnInit {
  private menuService = inject(MenusServices);
  private activatedRoute = inject(ActivatedRoute);


  menus: Signal<MenusInterface[] | undefined> = toSignal(this.menuService.allMenus$);
  showForm = signal<boolean>(false);


  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }

  addDataFn(menu: MenusInterface): void {
    menu.id = this.menus()!.length + 1;
    this.menuService.postNewMenu(menu).subscribe(console.log);
    this.showForm.set(false);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      if (data['id']) {
        this.showFormFn();
      }
    });
  }





    private getAllMenus(): void {
    this.menuService.getAllMenus().subscribe(console.log);
  }

}