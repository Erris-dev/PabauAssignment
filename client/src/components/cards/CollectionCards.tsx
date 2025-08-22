import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export type Guitar = {
  [x: string]: any;
  id: string;
  name: string;
  price: number;
  image: string;
};

const GuitarCard = ({ guitar }: { guitar: Guitar }) => {
  return (
    <Card className="w-full max-w-[350px] border-none shadow-none bg-transparent">
      <CardHeader className="p-0">
        <img src={guitar.image || ""} alt={guitar.name || ""} className="w-full h-auto rounded-lg object-cover" />
      </CardHeader>
      <CardContent className="p-4 pb-2">
        <CardTitle className="text-lg font-medium text-gray-800">{guitar.name || ""}</CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="text-base text-gray-500">{guitar.price || 0}</p>
      </CardFooter>
    </Card>
  );
};

export default GuitarCard