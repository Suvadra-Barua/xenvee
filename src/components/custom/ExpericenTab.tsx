import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import JobFile from "./JobFile"

export function ExpericenTab() {
  return (
    <div id="experience" className="mt-48">
    <Tabs defaultValue="work-experince" className="w-full md:w-[50%] mx-auto text-sm md:text-base">
      <TabsList className="grid w-full  my-4 md:w-3/4 mx-auto grid-cols-3 bg-earth-500 text-white/50 rounded-full">
        <TabsTrigger value="work-experince" className=" rounded-full data-[state=active]:text-earth-500 "> Experince</TabsTrigger>
        <TabsTrigger value="workshop" className="rounded-full data-[state=active]:text-earth-500" >Workshop/Session</TabsTrigger>
        {/* <TabsTrigger value="pa" className="rounded-full data-[state=active]:text-earth-500" >Password</TabsTrigger> */}
        <TabsTrigger value="achievement" className="rounded-full data-[state=active]:text-earth-500" >Achievement</TabsTrigger>
      </TabsList>
      <TabsContent value="work-experince">
        <JobFile/>
      </TabsContent>
      <TabsContent value="workshop">
        <Card className="min-h-96 w-[90%] md:w-full mx-auto">

        </Card>
      </TabsContent>
      <TabsContent value="achievement">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
