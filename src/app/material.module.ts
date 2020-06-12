import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatChipsModule,
  MatDialogModule,
} from "@angular/material";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatGridListModule } from "@angular/material/grid-list";

const modules = [
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDialogModule,
  MatProgressBarModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
