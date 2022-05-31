import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //cosas que queremos que sean visibles fuera de la propia clase
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})

export class HeroesModule {}