export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-emerald-400/20 border-t-emerald-400 rounded-full animate-spin"></div>
                <p className="text-zinc-500 text-sm font-medium animate-pulse">Loading Experience...</p>
            </div>
        </div>
    );
}
