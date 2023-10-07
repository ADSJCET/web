import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const collection = [
    {
        name: "Deepu Sasi",
        position: "President",
        year: "2023-24",
        img: "/excecom/deepu.webp",
    },
    {
      name: "Christy Maria Sebastian",
      position: "Joint secretary",
      year: "2023-24",
      img: "/excecom/christy.webp",
    },
    {
      name: "Aaron Mathew",
      position: "Design",
      year: "2023-24",
      img: "/excecom/aaron.webp",
    },
    {
      name: "Aavani Shaj",
      position: "Documentation",
      year: "2023-24",
      img: "/excecom/aavani.webp",
    },
    {
      name: "Abhishek S",
      position: "Design",
      year: "2023-24",
      img: "/excecom/abhishek.webp",
    },
    {
        name: "Richa Ann Abraham",
        position: "Vice President",
        year: "2023-24",
        img: "/excecom/richa.webp",
    },
    {
      name: "Ashly Elizabth Joseph",
      position: "Secretary",
      year: "2023-24",
      img: "/excecom/ashly.webp",
    },
    {
      name: "Christy Maria Sebastian",
      position: "Joint secretary",
      year: "2023-24",
      img: "/excecom/christy.webp",
    },
    {
      name: "Cyril K Sony",
      position: "Treasurer",
      year: "2023-24",
      img: "/excecom/cyril.webp",
    },
    {
      name: "Richa Ann Abraham",
      position: "Vice President",
      year: "2023-24",
      img: "/excecom/richa.webp",
    },
    {
      name: "Deepu Sasi",
      position: "President",
      year: "2023-24",
      img: "/excecom/deepu.webp",
    },
    {
      name: "Devana A",
      position: "Technical Team",
      year: "2023-24",
      img: "/excecom/devana.webp",
    },
    {
        name: "Ashly Elizabth Joseph",
        position: "Secretary",
        year: "2023-24",
        img: "/excecom/ashly.webp",
    },
    {
      name: "Don Sabu",
      position: "Technical Team",
      year: "2023-24",
      img: "/excecom/don.webp",
    },
    {
      name: "Rajat Sandeep",
      position: "Web Lead",
      year: "21-2025",
      img: "/excecom/lakshmi.webp",
    },
    {
      name: "Lakshmy Rajeev",
      position: "Design",
      year: "2023-24",
      img: "/excecom/malavika.webp",
    },
    {
        name: "Nikith Varghese",
      position: "Documentation (mentor)",
      year: "2023-24",
      img: "/excecom/nikith.webp",
    },
    {
      name: "Pooja Shibu",
      position: "Documentation",
      year: "2023-24",
      img: "/excecom/pooja.webp",
    },
    {
      name: "Sruthi Venugopal",
      position: "Treasurer",
      year: "2023-24",
      img: "/excecom/sruthi.webp",
    }
  ];
  const collection1=[

  ];
  const collection2=[

  ];
  return (
    <div className="mx-auto max-w-screen-lg md:masonry-3-col gap-10 [column-fill:_balance]">
      {collection.map((e, i) => (
        <Card key={i} className="mb-6">
          <CardHeader className="p-0">
            {/* Set the width and height to 100% of the viewport */}
            <img src={e.img} alt={e.name} className="w-full h-auto" />
          </CardHeader>
          <CardContent>
            <CardTitle>{e.name}</CardTitle>
            <CardDescription>{e.position}</CardDescription>
            <CardDescription>{e.year}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default Home;