import {Component, inject, Input, OnDestroy} from '@angular/core';
import {Store} from '@ngxs/store';
import {SetVideo} from '../../../../core/modules/ngxs/store/video/video.actions';
import {IonButton, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {imagesOutline} from 'ionicons/icons';
import {TranslocoDirective} from '@jsverse/transloco';
import {VideoTranscriptionService} from '../../../../core/services/video-transcription.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  imports: [IonButton, IonIcon, TranslocoDirective],
})
export class UploadComponent implements OnDestroy {
  private store = inject(Store);
  private transcriptionService = inject(VideoTranscriptionService);
  private destroy$ = new Subject<void>();

  @Input() isMobile = false;
  @Input() enableTranscription = false; // Enable video transcription feature

  uploadEl: HTMLInputElement = document.createElement('input');

  constructor() {
    this.uploadEl.setAttribute('type', 'file');
    this.uploadEl.setAttribute('accept', 'video/*');
    this.uploadEl.addEventListener('change', this.onFileUpload.bind(this));

    addIcons({imagesOutline});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  upload(): void {
    this.uploadEl.click();
  }

  async onFileUpload(): Promise<void> {
    const file = this.uploadEl.files?.[0];
    if (file) {
      const objectURL = (window.URL || window.webkitURL).createObjectURL(file);
      this.store.dispatch(new SetVideo(objectURL));

      // Optionally transcribe the video
      if (this.enableTranscription) {
        try {
          await this.transcriptionService.transcribeVideo(file);
        } catch (error) {
          console.error('Video transcription failed:', error);
        }
      }
    }
  }
}
