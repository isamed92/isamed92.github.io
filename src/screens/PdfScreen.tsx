import {
  Page,
  View,
  Document,
  PDFViewer,
  StyleSheet,
  Image,
  Text,
  Font,
} from '@react-pdf/renderer';
import { useIntl } from 'react-intl';
import { LOCALES } from '../i18n';
import { Space } from '../components';
import montserratRegular from '../../public/Montserrat-Regular.ttf';
import montserratBold from '../../public/Montserrat-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [
    {
      src: montserratRegular,
      fontWeight: 400,
    },
    {
      src: montserratBold,
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 100,
    padding: 10,
    flexGrow: 1,
  },
  backDesign: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'white',
    position: 'absolute',
  },
  headline: {
    position: 'absolute',
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  },
  imgHeadline: {
    width: '70%',
  },
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 150,
    left: 40,
    right: 40,
    bottom: 0,
  },
  columnGrey: {
    flexGrow: 1,
    border: '1px solid red',
    height: '76vh',
    width: '70',
  },
  columnWhite: {
    flexGrow: 1,
    border: '1px solid blue',
    height: '76vh',
    width: '100',
  },
  titleBackES: {
    backgroundColor: '#fcd536',
    height: 30,
    width: 100,
    position: 'absolute',
    top: 0,
  },
  titleBackEN: {
    backgroundColor: '#7abd53',
    height: 30,
    width: 100,
    position: 'relative',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 700,
    paddingLeft: 30,
    position: 'relative',
    left: -10,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  sign: {
    paddingLeft: 70,
  },
  head: {
    flexDirection: 'row',
    position: 'absolute',
  },
});
export const PdfScreen = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'pdfTitle' });
  const author = intl.formatMessage({ id: 'pdfAuthor' });

  const isEn = intl.locale === LOCALES.ENGLISH;
  const backDesign = isEn ? 'back-en.png' : 'back-es.png';
  const headline = isEn ? 'headline-en.png' : 'headline-es.png';

  const aboutTitle = intl.formatMessage({ id: 'aboutTitle' });
  const aboutText1 = intl.formatMessage({ id: 'aboutText1' });
  const aboutText2 = intl.formatMessage({ id: 'aboutText2' });
  const sign = isEn ? 'sign-alter.png' : 'sign.png';

  const experienceTitle = intl.formatMessage({ id: 'experienceTitle' });

  return (
    <>
      <Space height={100} />
      <PDFViewer width='100%' height='1000px'>
        <Document title={title} author={author} subject={title}>
          <Page size='A4' style={styles.page}>
            <View>
              <Image
                style={styles.backDesign}
                src={`assets/png/${backDesign}`}
              />
            </View>
            <View style={styles.headline}>
              <Image
                src={`assets/png/${headline}`}
                style={styles.imgHeadline}
              />
            </View>
            <View style={styles.container}>
              <View style={styles.columnGrey}>
                {/* contactme */}
                {/* education */}
                {/* skills */}
              </View>
              <View style={styles.columnWhite}>
                {/* profile */}
                <View style={styles.head}>
                  <View
                    style={isEn ? styles.titleBackEN : styles.titleBackES}
                  />
                  <Text style={styles.title}>{aboutTitle}</Text>
                </View>
                <Space height={10} />
                <Text style={styles.text}>{aboutText1}</Text>
                <Text style={styles.text}>{aboutText2}</Text>
                <Space height={20} />
                <Image src={`assets/png/${sign}`} style={styles.sign} />
                {/* experience */}
                <View style={isEn ? styles.titleBackEN : styles.titleBackES} />
                <Text style={styles.title}>{experienceTitle}</Text>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};
