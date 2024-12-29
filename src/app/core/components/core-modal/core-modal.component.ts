import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-core-modal',
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    standalone: true,
    templateUrl: './core-modal.component.html',
    styleUrl: './core-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreModalComponent {
    title = input('Cadastro');
    closeLabel = input('Fechar');
    closes = input(true);

    close = output();

    onClose() {
        this.close.emit();
    }

}
