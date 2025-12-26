import {Component, inject} from '@angular/core';
import {TranslocoPipe, TranslocoService} from '@jsverse/transloco';
import {ActivatedRoute, Router} from '@angular/router';
import {SITE_LANGUAGES} from '../../core/modules/transloco/languages';

@Component({
  selector: 'app-i18n-language-selector',
  templateUrl: './i18n-language-selector.component.html',
  styleUrls: ['./i18n-language-selector.component.scss'],
  imports: [TranslocoPipe],
})
export class I18NLanguageSelectorComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private transloco = inject(TranslocoService);

  current = this.transloco.getActiveLang();

  languages = this.groupLanguages();

  private groupLanguages() {
    const groups: {[key: string]: {key: string; value: string}[]} = {};
    for (const language of SITE_LANGUAGES) {
      let label = language.value.charAt(0).toUpperCase();
      if (label < 'A' || label > 'Z') {
        label = 'OTHER';
      }
      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(language);
    }

    const languageGroups = Object.keys(groups).map(key => {
      return {label: key, languages: groups[key]};
    });

    return languageGroups.sort((a, b) => {
      if (a.label === 'OTHER') return 1;
      if (b.label === 'OTHER') return -1;
      return a.label.localeCompare(b.label);
    });
  }

  async change(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.transloco.setActiveLang(lang);

    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {lang},
      queryParamsHandling: 'merge',
    });
  }
}
