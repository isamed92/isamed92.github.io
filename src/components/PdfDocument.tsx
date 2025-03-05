import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { useIntl } from 'react-intl';

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
});
export const PdfDocument = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'pdfTitle' });
  const author = intl.formatMessage({ id: 'author' });
  return (
    <Document title={title} author={author} subject={title}>
      <Page size='A4' style={styles.page}>
        <View></View>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};
