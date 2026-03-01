// AI Coach panel
import state from './state.js';

export function createCoachPanel(getSentences, aiEngine, weaknessProfiler, speechRules, intonationPatterns) {
  const CoachPanel = {
    _open: false,

    toggle() {
      this._open = !this._open;
      document.getElementById('coachPanel').classList.toggle('open', this._open);
      if (this._open) this.render();
    },

    render() {
      const el = document.getElementById('coachContent');
      if (!el) return;

      let html = '';

      // Weakness report
      try {
        const report = weaknessProfiler.generateReport();
        if (report && report.topWeaknesses && report.topWeaknesses.length) {
          html += '<div class="coach-section"><h3>\u8584\u5F31\u73AF\u8282</h3>';
          const catNames = { stress: '\u91CD\u97F3', intonation: '\u8BED\u8C03', linking: '\u8FDE\u8BFB', speed: '\u8282\u594F', vowels: '\u5143\u97F3', consonants: '\u8F85\u97F3' };
          report.topWeaknesses.forEach(w => {
            const score = Math.round((w.score || 0) * 100);
            const color = score >= 70 ? 'var(--ok)' : score >= 40 ? 'var(--acc)' : 'var(--red)';
            html += `<div style="margin-bottom:10px">
              <div style="display:flex;justify-content:space-between;font-size:13px"><span>${catNames[w.category] || w.category}</span><span style="color:${color};font-weight:700">${score}/100</span></div>
              <div class="weakness-bar"><div class="weakness-fill" style="width:${score}%;background:${color}"></div></div>
              <div style="font-size:11px;color:var(--dim)">${w.description || ''}</div>
            </div>`;
          });
          html += '</div>';
          if (report.overallLevel) {
            const levelNames = { beginner: '\u521D\u7EA7', intermediate: '\u4E2D\u7EA7', advanced: '\u9AD8\u7EA7' };
            html += `<div class="coach-section"><h3>\u603B\u4F53\u6C34\u5E73</h3><div class="coach-tip" style="font-size:16px;font-weight:700;text-align:center">${levelNames[report.overallLevel] || report.overallLevel}</div></div>`;
          }
        }
      } catch (e) { console.warn('Report gen:', e); }

      // AI coaching tips
      if (aiEngine) {
        try {
          const stats = aiEngine.adaptiveCoach?.getStats?.() || {};
          html += '<div class="coach-section"><h3>\u7EC3\u4E60\u7EDF\u8BA1</h3>';
          html += `<div class="coach-stat"><span>\u603B\u5F55\u97F3\u6570</span><span class="coach-stat-val">${stats.totalRecordings || stats.total || 0}</span></div>`;
          html += `<div class="coach-stat"><span>\u5E73\u5747\u5206</span><span class="coach-stat-val">${Math.round(stats.averageScore || stats.avgScore || 0)}</span></div>`;
          html += `<div class="coach-stat"><span>\u7B49\u7EA7</span><span class="coach-stat-val">${stats.level || 'Beginner'}</span></div>`;
          html += `<div class="coach-stat"><span>\u6700\u9AD8\u5206</span><span class="coach-stat-val">${stats.bestScore || stats.best || 0}</span></div>`;
          html += '</div>';
        } catch (e) {}

        const level = aiEngine.adaptiveCoach?.getDifficultyLevel?.() || 'beginner';
        const tips = {
          beginner: '\u91CD\u70B9\u7EC3\u4E60\u6B63\u786E\u7684\u91CD\u97F3\u4F4D\u7F6E\u3002\u4ED4\u7EC6\u542C\uFF0C\u7136\u540E\u5938\u5F20\u5730\u8BFB\u91CD\u97F3\u97F3\u8282\u3002',
          intermediate: '\u7EC3\u4E60\u5355\u8BCD\u4E4B\u95F4\u7684\u8FDE\u8BFB\u3002\u5C1D\u8BD5\u8DDF\u8BFB\u6A21\u5F0F\u6765\u6A21\u4EFF\u5730\u9053\u8282\u594F\u3002',
          advanced: '\u5FAE\u8C03\u8BED\u8C03\u66F2\u7EBF\u3002\u6CE8\u610F\u4E0D\u540C\u53E5\u578B\u4E2D\u58F0\u8C03\u7684\u5347\u964D\u53D8\u5316\u3002'
        };
        html += `<div class="coach-section"><h3>\u6559\u7EC3\u5EFA\u8BAE</h3><div class="coach-tip">${tips[level] || tips.beginner}</div></div>`;
      }

      // Connected speech rules for current sentence
      const s = getSentences()[state.idx];
      if (s) {
        const rules = speechRules.analyze(s.text);
        if (rules && rules.length) {
          html += '<div class="coach-section"><h3>\u8FDE\u8BFB\u89C4\u5219</h3>';
          rules.slice(0, 3).forEach(r => {
            html += `<div class="coach-tip"><strong>${r.rule.name}</strong>: ${r.example.written} \u2192 ${r.example.spoken}<br><span style="color:var(--dim);font-size:11px">${r.rule.description}</span></div>`;
          });
          html += '</div>';
        }

        // Intonation suggestion
        const intonation = intonationPatterns.suggest(s.text);
        if (intonation) {
          html += `<div class="coach-section"><h3>\u8BED\u8C03</h3><div class="coach-tip"><strong>${intonation.name}</strong><br>${intonation.description || ''}<br><span style="color:var(--dim);font-size:11px">${intonation.chineseComparison || ''}</span></div></div>`;
        }
      }

      el.innerHTML = html || '<div style="text-align:center;color:var(--dim);padding:40px 0">\u5F55\u51E0\u4E2A\u53E5\u5B50\u6765\u67E5\u770BAI\u6559\u7EC3\u5206\u6790\uFF01</div>';
    }
  };

  return CoachPanel;
}
