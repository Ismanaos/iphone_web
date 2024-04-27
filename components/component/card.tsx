import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function CardUnitaria() {
  return (
    <Card className="w-full max-w-md">
      <img
        alt="Smartphone"
        className="rounded-t-lg object-cover w-full aspect-[3/2]"
        height={400}
        src="/placeholder.svg"
        width={600}
      />
      <CardContent className="p-6 bg-[#003C43] space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">iPhone 14 Pro Max</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Pantalla OLED Super Retina XDR de 6.7 pulgadas, cámara triple de 48MP y procesador A16 Bionic.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">$1,099</span>
          <Button size="lg">Comprar</Button>
        </div>
      </CardContent>
    </Card>
  )
}
