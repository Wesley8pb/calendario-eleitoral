import { useRef, useState, useEffect } from "react";

/**
 * Hook para lazy rendering via Intersection Observer.
 * Retorna `true` quando o elemento entra na viewport (+ margem de antecipação).
 * Uma vez visível, permanece `true` para evitar re-renders desnecessários.
 */
export function useLazyRender(rootMargin = "400px") {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [isVisible, rootMargin]);

    return { ref, isVisible };
}
