import { Container } from 'src/components/Container/Container';
import { InventoryItems } from 'src/components/InventoryItems/InventoryItems';
import { useBillionaire } from 'src/context/BillionaireContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Inventory = () => {
  const { inventory } = useBillionaire();
  useDocumentTitle("Inventory");

  return (
    <Container>
      <InventoryItems items={inventory} />
    </Container>
  );
};
