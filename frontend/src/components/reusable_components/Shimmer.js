const Shimmer=()=>{
    return(
<div className="flex flex-wrap pt-32">{Array(20).fill("").map((e)=><div class="border border-blue-300 shadow rounded-md  p-5 max-w-sm h-48 w-56 mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
)}</div>)
}
export default Shimmer;