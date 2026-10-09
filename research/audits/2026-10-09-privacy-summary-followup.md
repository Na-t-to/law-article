# 個人情報関連2テーマの本文修正（2026-10-09）

週次棚卸しで保留していた最小5箇所を反映する追加記録。先行する
[週次監査記録](2026-10-09-weekly.md)は、その時点の状態を示す履歴として保持する。

## 反映範囲

- `ai-personal-data`: `currentSummary.facts[5]`、`implications[6]`、`uncertain[2]`
- `personal-information-protection-2026-amendment`: `currentSummary.uncertain[1]`、`uncertain[6]`

4箇所では、基本的な考え方②が今後の予定という記述を、2026年10月1日に
決定・公表された事実に更新する。具体的な政令・規則・ガイドラインの確定、
特例の施行とは引き続き区別する。

1箇所では、主要部分の施行日が公布から2年以内の政令指定日であることと、
附則第1条の公布日施行・公布から6か月経過日施行等の例外を区別する。

根拠：
- [個人情報保護委員会・令和8年改正法](https://www.ppc.go.jp/personalinfo/legal/r8kaiseihogohou/)
- [基本的な考え方②（2026-10-01）](https://www.ppc.go.jp/files/pdf/261001_kihonntekinakanngaekatanitsuite_2.pdf)
- [基本的な考え方①（2026-09-16）](https://www.ppc.go.jp/files/pdf/260916_kihonntekinakanngaekatanitsuite_1.pdf)
- [改正法・附則第1条](https://www.ppc.go.jp/files/pdf/260717_houritsu.pdf)
- [今後の進め方](https://www.ppc.go.jp/files/pdf/260909_kongonosusumekatanitsuite.pdf)

## 確認日と残る範囲

この2テーマに限り、読者向け現行記述を全件、AI関連72項目・個情法改正104項目、
計176項目・12論点について関係する一次資料の内容と照合した。
修正後に `lastUpdated` と `lastVerified` を2026-10-09とする。
これは引用先の全ページ・全解説文の再審査を意味しない。
AI事業者ガイドラインのMETI掲載URLはアクセス制限があり、同じ資料の
[総務省公式版](https://www.soumu.go.jp/main_content/001064279.pdf)で該当内容を照合した。

第三者提供の状態表示、漏えい報告・通知条件の精密化、委託の条件分岐の表示設計等の
追加提案は今回に含めず、引き続き保留とする。他135テーマの確認日、他の本文、
法改正イベント、資料・記事・更新履歴・分類は変更しない。

## 公開確認

単一の差分ファイルとチェックサム付きincomingバッチを用い、5箇所すべての旧文を
検証してから適用する。回帰試験で変更範囲、再適用、異常時の無変更、全ロード順を確認する。
公開完了の判定は、このバッチのCI・Pages成功、公開ファイルの一致、対象2テーマの
実表示検証を別途行う。本文修正を行っただけで公開成功と扱わない。
