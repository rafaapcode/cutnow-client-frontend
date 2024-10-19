import List from "../List";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type IServiceTableProps = {
  services: {
    nomeService: string;
    tempoMedio: number;
    preco: number;
  }[];
};

type IRowsTableProps = {
  service: {
    nomeService: string;
    tempoMedio: number;
    preco: number;
  }
};

const Rows = ({ service }: IRowsTableProps) => {
  return (
    <TableRow>
      <TableCell>{service.nomeService}</TableCell>
      <TableCell>{service.tempoMedio}</TableCell>
      <TableCell>{service.preco}</TableCell>
    </TableRow>
  );
};

const ServiceTable = ({ services }: IServiceTableProps) => {
  return (
    <Table className="mt-16 mb-10 w-[95%] md:w-[90%] lg:w-1/2 mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="text-white text-sm md:text-lg">Serviço</TableHead>
          <TableHead className="text-white text-sm md:text-lg">
            Tempo em média
          </TableHead>
          <TableHead className="text-white text-sm md:text-lg">Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <List data={services} resourceName="service" ItemComponent={Rows} />
      </TableBody>
    </Table>
  );
};

export default ServiceTable;
