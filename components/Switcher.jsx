import { Button as KittenButton } from '@ui-kitten/components';

export default function Switcher() {
  const { i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
      <KittenButton onPress={() => switchLanguage('en')}>English</KittenButton>
      <KittenButton onPress={() => switchLanguage('ru')}>Русский</KittenButton>
      <KittenButton onPress={() => switchLanguage('kk')}>Казахский</KittenButton>
    </View>
  );
}